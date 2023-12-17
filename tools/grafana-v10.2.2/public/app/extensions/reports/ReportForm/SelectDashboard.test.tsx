import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { TestProvider } from 'test/helpers/TestProvider';

import { getRouteComponentProps } from 'app/core/navigation/__mocks__/routeProps';
import { addRootReducer } from 'app/store/configureStore';

import { mockToolkitActionCreator } from '../../../../test/core/redux/mocks';
import reportsReducers, { initialState, updateReportProp } from '../state/reducers';

import { SelectDashboards, Props } from './SelectDashboard';

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock('app/core/services/backend_srv', () => {
  return {
    backendSrv: {
      search: async () => Promise.resolve([{ uid: 'test', value: 1, title: 'Test dashboard' }]),
      getDashboardByUid: async () =>
        Promise.resolve({ dashboard: { uid: 'test', value: 1, title: 'Test dashboard' }, meta: {} }),
    },
  };
});

jest.mock('@grafana/runtime/src/config', () => ({
  config: {
    buildInfo: {
      edition: 'Enterprise',
      version: '9.0.0',
      commit: 'abc123',
      env: 'dev',
      latestVersion: '',
      hasUpdate: false,
      hideVersion: false,
    },
    licenseInfo: {
      enabledFeatures: { 'reports.email': true },
    },
    featureToggles: {
      accesscontrol: true,
    },
    bootData: { navTree: [], user: {} },
    rendererAvailable: true,
  },
}));

jest.mock('app/core/core', () => {
  return {
    contextSrv: {
      hasPermission: () => true,
    },
  };
});

const blankReport = initialState.report;
const testReport = {
  ...blankReport,
  id: 1,
  name: 'Test report',
  dashboardId: 1,
  dashboardName: 'Test dashboard',
  dashboards: [
    {
      dashboard: {
        id: 1,
        uid: 'test',
        name: 'Test dashboard',
      },
      timeRange: { to: '', from: '' },
    },
  ],
  recipients: 'test@me.com',
};

const setup = (propOverrides?: Partial<Props>) => {
  addRootReducer(reportsReducers);
  const props: Props = {
    ...getRouteComponentProps(),
    report: blankReport,
    updateReportProp: mockToolkitActionCreator(updateReportProp),
    initVariables: jest.fn(),
    cleanUpVariables: jest.fn(),
    templating: {},
    ...propOverrides,
  };

  return render(
    <TestProvider>
      <SelectDashboards {...props} />
    </TestProvider>
  );
};

describe('SelectDashboard', () => {
  it('should render', async () => {
    setup();
    expect(await screen.findByText('1. Select dashboard')).toBeInTheDocument();
  });

  it('should not update the form if nothing was entered', async () => {
    const mockUpdate = jest.fn() as any;
    setup({ updateReportProp: mockUpdate });

    fireEvent.submit(screen.getByText(/next/i));

    await waitFor(() => expect(mockUpdate).not.toBeCalled());
  });

  it('should show the available data', async () => {
    setup({ report: testReport });
    expect(await screen.findByText('General/Test dashboard')).toBeInTheDocument();
    expect(screen.getByText('Select time range')).toBeInTheDocument();
  });

  it('should apply params from URL', async () => {
    Object.defineProperty(window, 'location', {
      value: {
        search: '&from=now-6h&to=now&db-uid=msRNFn-nz&db-id=1&db-name=Test%20dashboard',
      },
    });

    setup();

    expect(await screen.findByText('General/Test dashboard')).toBeInTheDocument();
    expect(screen.getByText('Last 6 hours')).toBeInTheDocument();
  });
});
