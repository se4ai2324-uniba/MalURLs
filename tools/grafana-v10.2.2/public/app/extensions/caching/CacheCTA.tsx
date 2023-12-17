import React from 'react';

import EmptyListCTA from 'app/core/components/EmptyListCTA/EmptyListCTA';
import { contextSrv } from 'app/core/core';

import { AccessControlAction } from '../types';

import { Props } from './DataSourceCache';

export const CacheCTA = (props: Props) => {
  const { enableDataSourceCache, dataSource, pageId } = props;
  const canWriteCache = contextSrv.hasPermissionInMetadata(AccessControlAction.DataSourcesCachingWrite, dataSource);

  return (
    <EmptyListCTA
      title="Caching is not enabled for this data source."
      buttonTitle="Enable"
      buttonIcon="database"
      onClick={() => {
        enableDataSourceCache(pageId);
      }}
      proTip="Enabling caching can reduce the amount of redundant requests sent to the data source."
      proTipLink="https://grafana.com/docs/grafana/latest/enterprise/query-caching/"
      proTipLinkTitle="Learn more"
      buttonDisabled={!canWriteCache}
    />
  );
};
