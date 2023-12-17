import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import 'whatwg-fetch';
import React from 'react';

import { selectors as e2eSelectors } from '@grafana/e2e-selectors/src';
import config from 'app/core/config';
import { contextSrv } from 'app/core/core';
import { backendSrv } from 'app/core/services/backend_srv';
import { SessionUser } from 'app/features/dashboard/components/ShareModal/SharePublicDashboard/SharePublicDashboardUtils';

import { TestProvider } from '../../../test/helpers/TestProvider';
import { UserListPublicDashboardPage } from '../../features/admin/UserListPublicDashboardPage/UserListPublicDashboardPage';

require('./api/emailSharingApi');

const server = setupServer();

jest.mock('@grafana/runtime', () => ({
  ...jest.requireActual('@grafana/runtime'),
  getBackendSrv: () => backendSrv,
  reportInteraction: jest.fn(),
}));

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

const renderPage = async (waitForFetch = true) => {
  render(
    <TestProvider>
      <UserListPublicDashboardPage />
    </TestProvider>
  );

  waitForFetch && (await waitForElementToBeRemoved(screen.getByTestId('Spinner')));
};

const selectors = e2eSelectors.pages.UserListPage.publicDashboards;

describe('Success render', () => {
  beforeEach(() => {
    const users: SessionUser[] = [
      {
        email: 'example@example.com',
        firstSeenAtAge: '4 days',
        totalDashboards: 3,
      },
      {
        email: 'example2@example.com',
        firstSeenAtAge: '25 minutes',
        totalDashboards: 1,
      },
    ];

    server.use(
      rest.get('/api/public-dashboards/share/users', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(users));
      })
    );
  });

  it('renders loading state', async () => {
    await renderPage(false);
    expect(screen.getByTestId('Spinner')).toBeInTheDocument();
  });

  it('renders component', async () => {
    await renderPage();
    expect(screen.getByTestId(selectors.container)).toBeInTheDocument();
  });

  it('renders list with users', async () => {
    await renderPage();
    expect(screen.getAllByRole('row')).toHaveLength(3);
  });
});

describe('Fail render', () => {
  beforeEach(() => {
    server.use(
      rest.get('/api/public-dashboards/share/users', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
  });

  it('renders list without users', async () => {
    await renderPage();
    expect(screen.getByTestId(selectors.container)).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(1);
  });
});
