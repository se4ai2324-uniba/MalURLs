import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { Permissions } from 'app/core/components/AccessControl';
import { UpgradeBox } from 'app/core/components/Upgrade/UpgradeBox';
import { contextSrv } from 'app/core/core';
import { highlightTrial } from 'app/features/admin/utils';
import { loadDataSource, loadDataSourceMeta } from 'app/features/datasources/state/actions';

import { AccessControlAction as EnterpriseActions, EnterpriseStoreState } from '../types';

type ExternalProps = { uid: string };

function mapStateToProps(state: EnterpriseStoreState, props: ExternalProps) {
  const { uid } = props;
  return {
    resourceId: uid,
  };
}

const mapDispatchToProps = {
  loadDataSource,
  loadDataSourceMeta,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);
export type Props = ConnectedProps<typeof connector>;

// The RBAC version for data source permissions
const DataSourcePermissions = ({ resourceId, loadDataSource, loadDataSourceMeta }: Props) => {
  useEffect(() => {
    loadDataSource(resourceId);
  }, [resourceId, loadDataSource]);
  const canSetPermissions = contextSrv.hasPermission(EnterpriseActions.DataSourcesPermissionsWrite);

  useEffect(() => {
    // Initialize DS metadata on page load to populate tab navigation
    loadDataSource(resourceId as any).then(loadDataSourceMeta);
  }, [loadDataSource, loadDataSourceMeta, resourceId]);

  return (
    <>
      {highlightTrial() && (
        <UpgradeBox
          featureId={'data-source-permissions'}
          eventVariant={'trial'}
          featureName={'data source permissions'}
          text={'Enable data source permissions for free during your trial of Grafana Pro.'}
        />
      )}
      <Permissions resource="datasources" resourceId={resourceId} canSetPermissions={canSetPermissions} />
    </>
  );
};

export default connector(DataSourcePermissions);
