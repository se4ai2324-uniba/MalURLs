import { css } from '@emotion/css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, ConnectedProps } from 'react-redux';

import { GrafanaTheme2 } from '@grafana/data';
import { reportInteraction } from '@grafana/runtime';
import { Button, HorizontalGroup, useStyles2 } from '@grafana/ui';

import { EnterpriseStoreState, SAMLFormData, SAMLStepKey } from '../../../types';
import SAMLForm from '../SAMLForm';
import { saveSAMLSettings } from '../state/actions';
import { clearSAMLState, settingsUpdated } from '../state/reducers';

type SaveAndTestData = Pick<SAMLFormData, 'enabled'>;

function mapStateToProps(state: EnterpriseStoreState) {
  const {
    samlSettings,
    storedSamlSettings,
    keyCertValueType,
    metadataValueType,
    signRequests,
    keyConfigured,
    certConfigured,
  } = state.samlConfig;
  return {
    samlSettings,
    storedSamlSettings,
    keyCertValueType,
    metadataValueType,
    signRequests,
    keyConfigured,
    certConfigured,
  };
}

const mapDispatchToProps = {
  settingsUpdated,
  saveSAMLSettings,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type Props = ConnectedProps<typeof connector>;

export const SaveAndTestUnconnected = ({
  samlSettings,
  storedSamlSettings,
  keyCertValueType,
  metadataValueType,
  signRequests,
  keyConfigured,
  certConfigured,
  settingsUpdated,
  saveSAMLSettings,
}: Props): JSX.Element => {
  const styles = useStyles2(getStyles);

  const {
    handleSubmit,
    getValues,
    formState: { isDirty },
  } = useForm();

  const saveData = ({ enabled }: SaveAndTestData) => {
    if (isDirty) {
      settingsUpdated({
        ...samlSettings,
        enabled,
      });
    }
  };

  // const onSaveAndEnable = () => {};
  const onSaveAndEnable = async () => {
    let formData: SAMLFormData = {
      ...samlSettings,
      keyCertValueType,
      keyConfigured,
      certConfigured,
      signRequests,
      metadataValueType,
      enabled: true,
    };

    saveSAMLSettings(formData, storedSamlSettings);
    reportInteraction('authentication_saml_saved');
    clearSAMLState();
  };

  return (
    <SAMLForm
      activeStep={SAMLStepKey.SaveAndTest}
      onSubmit={handleSubmit(saveData)}
      confirmRedirect={isDirty}
      getFormData={getValues}
      label="Test and enable"
    >
      <div className={styles.description}>
        <span>
          If you are ready to apply your SAML configuration use the “Save and enable” button. You will be able to
          disable the configuration.
        </span>
      </div>
      <HorizontalGroup>
        <Button variant="primary" onClick={onSaveAndEnable}>
          Save and enable
        </Button>
      </HorizontalGroup>
    </SAMLForm>
  );
};

const getStyles = (theme: GrafanaTheme2) => {
  return {
    description: css`
      margin-bottom: ${theme.spacing(2)};
      color: ${theme.colors.text.primary};
      font-size: ${theme.typography.body.fontSize};
    `,
  };
};

export default connector(SaveAndTestUnconnected);
