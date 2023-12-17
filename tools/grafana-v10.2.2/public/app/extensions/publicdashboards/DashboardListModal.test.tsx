import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import 'whatwg-fetch';
import React from 'react';

import { selectors as e2eSelectors } from '@grafana/e2e-selectors/src';
import { backendSrv } from 'app/core/services/backend_srv';
import { SessionDashboard } from 'app/features/dashboard/components/ShareModal/SharePublicDashboard/SharePublicDashboardUtils';

import { TestProvider } from '../../../test/helpers/TestProvider';
import { DashboardsListModal } from '../../features/admin/UserListPublicDashboardPage/DashboardsListModalButton';

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

afterAll(() => {
  server.close();
});

afterEach(() => {
  jest.restoreAllMocks();
  server.resetHandlers();
});

const selectors = e2eSelectors.pages.UserListPage.UsersListPublicDashboardsPage.DashboardsListModal;
const renderPage = async (waitForFetch = true) => {
  render(
    <TestProvider>
      <DashboardsListModal email="test@test.com" onDismiss={() => {}} />
    </TestProvider>
  );

  waitForFetch && (await waitForElementToBeRemoved(screen.getByTestId('Spinner')));
};

const dashboards: SessionDashboard[] = [
  {
    dashboardTitle: 'A dashboard title 1',
    dashboardUid: 'dashboard-uid-1',
    publicDashboardAccessToken: 'public-dashboard-access-token-1',
  },
  {
    dashboardTitle: 'A dashboard title 2',
    dashboardUid: 'dashboard-uid-2',
    publicDashboardAccessToken: 'public-dashboard-access-token-2',
  },
];

describe('Success render', () => {
  beforeEach(() => {
    server.use(
      rest.get('/api/public-dashboards/share/users/:email/dashboards', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(dashboards));
      })
    );
  });

  it('renders loading state', async () => {
    await renderPage(false);
    expect(screen.getByTestId('Spinner')).toBeInTheDocument();
  });

  it('renders title and list', async () => {
    await renderPage();
    expect(screen.getByText('Public dashboards')).toBeInTheDocument();
    dashboards.forEach((dash) => {
      expect(screen.getByTestId(selectors.listItem(dash.dashboardUid))).toBeInTheDocument();
    });
  });
});

describe('Fail render', () => {
  beforeEach(() => {
    server.use(
      rest.get('/api/public-dashboards/share/users/:email/dashboards', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
  });

  it('renders list without dashboards', async () => {
    await renderPage();
    expect(screen.getByText('Public dashboards')).toBeInTheDocument();
    dashboards.forEach((dash) => {
      expect(screen.queryByTestId(selectors.listItem(dash.dashboardUid))).not.toBeInTheDocument();
    });
  });
});
