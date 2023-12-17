import { getBackendSrv } from '@grafana/runtime';
import { contextSrv } from 'app/core/core';
import { saveSettings } from 'app/features/auth-config/state/actions';
import { AccessControlAction, SettingsSection, ThunkResult, UpdateSettingsQuery } from 'app/types';

import { SAMLFormData } from '../../../types';
import {
  getMetadataValueType,
  makeSettingsDiff,
  parseSAMLSettings,
  prepareSaveSAMLData,
} from '../utils';
import { validateConfig } from '../utils/validation';

import {
  settingsLoaded,
  setCertConfigured,
  setKeyCertValueType,
  setKeyConfigured,
  setMetadataValueType,
  setShowSavedBadge,
  settingsLoadingBegin,
  settingsLoadingEnd,
  setSignRequests,
  setStoredSAMLSettings,
  resetError,
  setError,
} from './reducers';

const SHOW_SAVED_BADGE_TIME = 5000;

export function loadSAMLSettings(): ThunkResult<void> {
  return async (dispatch) => {
    if (contextSrv.hasPermission(AccessControlAction.SettingsRead)) {
      try {
        dispatch(settingsLoadingBegin());
        const result = await getBackendSrv().get('/api/admin/settings');
        const samlSettingsRaw = result!['auth.saml'] || {};
        const samlSettings = parseSAMLSettings(samlSettingsRaw);
        dispatch(setStoredSAMLSettings(samlSettingsRaw));
        dispatch(setSignRequests(!!samlSettings.signatureAlgorithm));
        dispatch(setKeyCertValueType(samlSettings.privateKeyPath ? 'path' : 'base64'));
        dispatch(setKeyConfigured(!!samlSettings.privateKeyPath || !!samlSettings.privateKey));
        dispatch(setCertConfigured(!!samlSettings.certificatePath || !!samlSettings.certificate));
        dispatch(setMetadataValueType(getMetadataValueType(samlSettings)));
        dispatch(settingsLoaded(samlSettings));
      } catch (error) {
        dispatch(settingsLoadingEnd());
      }
    }
  };
}

export function saveSAMLSettings(formData: SAMLFormData, savedSettings: SettingsSection): ThunkResult<void> {
  return async (dispatch) => {
    // Validate settings on save
    dispatch(resetError());
    const validationResults = validateConfig(formData);
    if (!validationResults.valid) {
      dispatch(setError({ message: 'Cannot save settings', errors: validationResults.errors! }));
      return;
    }

    const data = prepareSaveSAMLData(formData);
    // Only update modified options
    if (data.updates) {
      const diff = makeSettingsDiff(data.updates['auth.saml'], savedSettings);
      data.updates['auth.saml'] = diff;
    }

    // Save settings
    const updated = await dispatch(saveSettings(data));
    if (updated) {
      dispatch(showSavedBadge());
      dispatch(loadSAMLSettings());
    }
  };
}

function saveAndReload(data: UpdateSettingsQuery): ThunkResult<void> {
  return async (dispatch) => {
    const updated = await dispatch(saveSettings(data));
    if (updated) {
      dispatch(showSavedBadge());
      dispatch(loadSAMLSettings());
    }
  };
}

export function resetSAMLSettings(): ThunkResult<void> {
  return async (dispatch) => {
    const removeData = {
      removals: {
        'auth.saml': [
          'enabled',
          'name',
          'single_logout',
          'allow_sign_up',
          'auto_login',
          'certificate',
          'certificate_path',
          'private_key',
          'private_key_path',
          'signature_algorithm',
          'idp_metadata',
          'idp_metadata_path',
          'idp_metadata_url',
          'max_issue_delay',
          'metadata_valid_duration',
          'allow_idp_initiated',
          'relay_state',
          'assertion_attribute_name',
          'assertion_attribute_login',
          'assertion_attribute_email',
          'assertion_attribute_groups',
          'assertion_attribute_role',
          'assertion_attribute_org',
          'allowed_organizations',
          'org_mapping',
          'role_values_editor',
          'role_values_admin',
          'role_values_grafana_admin',
          'name_id_format',
          'skip_org_role_sync',
        ],
      },
    };
    dispatch(saveAndReload(removeData));
  };
}

export function enableSAML(): ThunkResult<void> {
  return async (dispatch) => {
    dispatch(
      saveAndReload({
        updates: {
          'auth.saml': { enabled: 'true' },
        },
      })
    );
  };
}

export function disableSAML(): ThunkResult<void> {
  return async (dispatch) => {
    dispatch(
      saveAndReload({
        updates: {
          'auth.saml': { enabled: 'false' },
        },
      })
    );
  };
}

export function showSavedBadge(): ThunkResult<void> {
  return async (dispatch) => {
    dispatch(setShowSavedBadge(true));
    setTimeout(() => {
      dispatch(setShowSavedBadge(false));
    }, SHOW_SAVED_BADGE_TIME);
  };
}
