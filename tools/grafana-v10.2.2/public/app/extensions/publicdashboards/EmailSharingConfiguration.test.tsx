import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import 'whatwg-fetch';
import { selectors as e2eSelectors } from '@grafana/e2e-selectors/src';
import config from 'app/core/config';
import { contextSrv } from 'app/core/core';
import { backendSrv } from 'app/core/services/backend_srv';
import {
  PublicDashboard,
  PublicDashboardShareType,
} from 'app/features/dashboard/components/ShareModal/SharePublicDashboard/SharePublicDashboardUtils';
import {
  getExistentPublicDashboardResponse,
  pubdashResponse,
  renderSharePublicDashboard,
} from 'app/features/dashboard/components/ShareModal/SharePublicDashboard/utilsTest';
import { trackDashboardSharingActionPerType } from 'app/features/dashboard/components/ShareModal/analytics';
import { shareDashboardType } from 'app/features/dashboard/components/ShareModal/utils';

require('./api/emailSharingApi');

const server = setupServer();

jest.mock('@grafana/runtime', () => ({
  ...jest.requireActual('@grafana/runtime'),
  getBackendSrv: () => backendSrv,
}));

jest.mock('app/features/dashboard/components/ShareModal/analytics', () => ({
  ...jest.requireActual('app/features/dashboard/components/ShareModal/analytics'),
  trackDashboardSharingActionPerType: jest.fn(),
}));

const selectors = e2eSelectors.pages.ShareDashboardModal.PublicDashboard.EmailSharingConfiguration;

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' });
});

beforeEach(() => {
  config.licenseInfo = { ...config.licenseInfo, enabledFeatures: { publicDashboardsEmailSharing: true } };
  config.featureToggles.publicDashboardsEmailSharing = true;
  config.featureToggles.publicDashboards = true;

  jest.spyOn(contextSrv, 'hasPermission').mockReturnValue(true);
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  jest.restoreAllMocks();
  server.resetHandlers();
});

const pubdashResponseWithEmailSharing: PublicDashboard = {
  ...pubdashResponse,
  share: PublicDashboardShareType.EMAIL,
  recipients: [
    { uid: '1', recipient: 'email_test@test.com' },
    { uid: '2', recipient: 'email2_test@test.com' },
  ],
};

const pubdashResponseWithPublicSharing: PublicDashboard = {
  ...pubdashResponse,
  share: PublicDashboardShareType.PUBLIC,
};

describe('New config setup', () => {
  beforeEach(() => {
    server.use(getExistentPublicDashboardResponse({ share: PublicDashboardShareType.PUBLIC }));
  });
  it('does not render email sharing section', async () => {
    config.licenseInfo = { ...config.licenseInfo, enabledFeatures: { publicDashboardsEmailSharing: false } };
    await renderSharePublicDashboard();

    expect(screen.queryByTestId(selectors.Container)).not.toBeInTheDocument();
  });
  it('does not render email sharing list section', async () => {
    await renderSharePublicDashboard();

    expect(screen.queryByText('Anyone with a link')).toBeInTheDocument();
    expect(screen.queryByText('Only specified people')).toBeInTheDocument();

    expect(screen.queryByTestId(selectors.EmailSharingInput)).not.toBeInTheDocument();
    expect(screen.queryByTestId(selectors.EmailSharingInviteButton)).not.toBeInTheDocument();
    expect(screen.queryByTestId(selectors.EmailSharingList)).not.toBeInTheDocument();
  });
  it('renders email sharing section with empty email list', async () => {
    server.use(
      rest.patch('/api/dashboards/uid/:dashboardUid/public-dashboards/:uid', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(pubdashResponseWithEmailSharing));
      })
    );

    await renderSharePublicDashboard();

    const emailSharingType = screen.getByText('Only specified people');
    await userEvent.click(emailSharingType);

    expect(screen.getByTestId(selectors.EmailSharingInput)).toBeInTheDocument();
    expect(screen.getByTestId(selectors.EmailSharingInviteButton)).toBeEnabled();
    expect(screen.queryByTestId(selectors.EmailSharingList)).not.toBeInTheDocument();
  });
});

describe('Already setup', () => {
  beforeEach(() => {
    server.use(getExistentPublicDashboardResponse(pubdashResponseWithEmailSharing));
  });
  it('renders email sharing section with email list', async () => {
    server.use(
      rest.patch('/api/dashboards/uid/:dashboardUid/public-dashboards/:uid', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(pubdashResponseWithEmailSharing));
      })
    );

    await renderSharePublicDashboard();

    const emailSharingType = screen.getByText('Only specified people');
    await userEvent.click(emailSharingType);

    expect(screen.getByTestId(selectors.Container)).toBeEnabled();
    expect(screen.getByTestId(selectors.EmailSharingInput)).toBeInTheDocument();
    expect(screen.getByTestId(selectors.EmailSharingInviteButton)).toBeInTheDocument();
    expect(screen.getByTestId(selectors.EmailSharingList)).toBeInTheDocument();
  });
  it('renders with disabled inputs when does not have write permissions', async () => {
    jest.spyOn(contextSrv, 'hasPermission').mockReturnValue(false);
    await renderSharePublicDashboard();

    const emailSharingType = screen.getByText('Only specified people');
    await userEvent.click(emailSharingType);

    expect(screen.getByTestId(selectors.Container)).toBeDisabled();
  });
});

describe('Report interactions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    server.use(getExistentPublicDashboardResponse(pubdashResponseWithEmailSharing));
    server.use(
      rest.patch('/api/dashboards/uid/:dashboardUid/public-dashboards/:uid', (req, res, ctx) =>
        res(ctx.status(200), ctx.json(pubdashResponseWithEmailSharing))
      )
    );
    server.use(rest.post('/api/public-dashboards/:uid/share/recipients', (req, res, ctx) => res(ctx.status(200))));
  });

  it('reports interaction when email share type is clicked', async () => {
    server.use(getExistentPublicDashboardResponse(pubdashResponseWithPublicSharing));
    server.use(
      rest.patch('/api/dashboards/uid/:dashboardUid/public-dashboards/:uid', (req, res, ctx) =>
        res(ctx.status(200), ctx.json(pubdashResponseWithPublicSharing))
      )
    );

    await renderSharePublicDashboard();
    await userEvent.click(screen.getByText('Only specified people'));

    expect(trackDashboardSharingActionPerType).toHaveBeenCalledTimes(1);
    expect(trackDashboardSharingActionPerType).toHaveBeenCalledWith(
      'share_type_email',
      shareDashboardType.publicDashboard
    );
  });

  it('reports interaction when public share type is clicked', async () => {
    await renderSharePublicDashboard();
    await userEvent.click(screen.getByText('Anyone with a link'));

    expect(trackDashboardSharingActionPerType).toHaveBeenCalledTimes(1);
    expect(trackDashboardSharingActionPerType).toHaveBeenLastCalledWith(
      'share_type_public',
      shareDashboardType.publicDashboard
    );
  });

  it('reports interaction when invite email is clicked', async () => {
    await renderSharePublicDashboard();
    await userEvent.type(screen.getByTestId(selectors.EmailSharingInput), 'example@example.com');
    await userEvent.click(screen.getByTestId(selectors.EmailSharingInviteButton));

    expect(trackDashboardSharingActionPerType).toHaveBeenCalledTimes(1);
    expect(trackDashboardSharingActionPerType).toHaveBeenLastCalledWith(
      'invite_email',
      shareDashboardType.publicDashboard
    );
  });

  it('reports interaction when revoke email is clicked', async () => {
    server.use(
      rest.delete('/api/public-dashboards/:uid/share/recipients/:recipientId', (req, res, ctx) => res(ctx.status(200)))
    );

    await renderSharePublicDashboard();
    await userEvent.click(screen.getByTestId(`${selectors.DeleteEmail}-0`));

    expect(trackDashboardSharingActionPerType).toHaveBeenCalledTimes(1);
    expect(trackDashboardSharingActionPerType).toHaveBeenLastCalledWith(
      'delete_email',
      shareDashboardType.publicDashboard
    );
  });

  it('reports interaction when reshare email is clicked', async () => {
    server.use(
      rest.patch('/api/public-dashboards/:uid/share/recipients/:recipientId', (req, res, ctx) => res(ctx.status(200)))
    );

    await renderSharePublicDashboard();
    await userEvent.click(screen.getByTestId(`${selectors.ReshareLink}-0`));

    expect(trackDashboardSharingActionPerType).toHaveBeenCalledTimes(1);
    expect(trackDashboardSharingActionPerType).toHaveBeenLastCalledWith(
      'reshare_email',
      shareDashboardType.publicDashboard
    );
  });
});
