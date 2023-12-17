import { getBackendSrv } from '@grafana/runtime';
import { contextSrv } from 'app/core/core';
import { registerAuthProvider, AuthProviderInfo, AuthProviderStatus } from 'app/features/auth-config';
import { AccessControlAction } from 'app/types';

import { SAMLStepKey } from '../types';

import SAMLStepAssertionMapping from './SAML/steps/AssertionMapping';
import SAMLStepConnectToIdP from './SAML/steps/ConnectToIdP';
import SAMLStepGeneral from './SAML/steps/General';
import SAMLStepKeyCert from './SAML/steps/KeyCert';
import SAMLStepSaveAndTest from './SAML/steps/SaveAndTest';
import { isDefaultSAMLConfig } from './SAML/utils';

export function initAuthConfig() {
  const samlAuthProvider: AuthProviderInfo = {
    id: 'saml',
    type: 'SAML',
    protocol: 'SAML 2.0',
    displayName: 'SAML',
    configPath: 'saml/general',
  };
  registerAuthProvider(samlAuthProvider, getConfigHook);
}

async function getConfigHook(): Promise<AuthProviderStatus> {
  if (contextSrv.hasPermission(AccessControlAction.SettingsRead)) {
    // TODO: might want to put this into a state
    const result = await getBackendSrv().get('/api/admin/settings');
    const samlSettings = result!['auth.saml'] || {};
    const isDefault = isDefaultSAMLConfig(samlSettings);
    if (isDefault) {
      return { configured: false, enabled: false };
    } else {
      return {
        configured: true,
        enabled: samlSettings['enabled'] === 'true',
        name: samlSettings['name'],
      };
    }
  }

  return { configured: false, enabled: false };
}

export const samlSteps = [
  { id: SAMLStepKey.General, name: 'General settings', component: SAMLStepGeneral },
  { id: SAMLStepKey.KeyCert, name: 'Key and certificate', component: SAMLStepKeyCert },
  { id: SAMLStepKey.ConnectToIdP, name: 'Connect Grafana with Identity Provider', component: SAMLStepConnectToIdP },
  { id: SAMLStepKey.AssertionMapping, name: 'User mapping', component: SAMLStepAssertionMapping },
  { id: SAMLStepKey.SaveAndTest, name: 'Test and enable', component: SAMLStepSaveAndTest },
];
