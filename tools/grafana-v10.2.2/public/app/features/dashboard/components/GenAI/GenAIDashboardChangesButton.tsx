import React, { useCallback } from 'react';

import { DashboardModel } from '../../state';

import { GenAIButton } from './GenAIButton';
import { EventTrackingSrc } from './tracking';
import { getDashboardChanges, Message, Role } from './utils';

interface GenAIDashboardChangesButtonProps {
  dashboard: DashboardModel;
  onGenerate: (title: string) => void;
  disabled?: boolean;
}

const CHANGES_GENERATION_STANDARD_PROMPT = [
  'You are an expert in Grafana Dashboards',
  'Your goal is to write a description of the changes for a dashboard',
  'When referring to panel changes, use the panel title',
  'When using panel title, wrap it with double quotes',
  'When the panel changes the position, just mention the panel has changed position and not the specific change',
  'When an entire panel is added or removed, use the panel title and only say it was added or removed and disregard the rest of the changes for that panel',
  'Group changes when all panels are affected',
  'Do not mention line number',
  'Refer to templating elements as variables',
  'Ignore and never mention changes about plugin version',
  'Try to make the response as short as possible',
].join('.\n');

export const GenAIDashboardChangesButton = ({ dashboard, onGenerate, disabled }: GenAIDashboardChangesButtonProps) => {
  const messages = useCallback(() => getMessages(dashboard), [dashboard]);

  return (
    <GenAIButton
      messages={messages}
      onGenerate={onGenerate}
      loadingText={'Generating changes summary'}
      temperature={0}
      eventTrackingSrc={EventTrackingSrc.dashboardChanges}
      toggleTipTitle={'Improve your dashboard changes summary'}
      disabled={disabled}
    />
  );
};

function getMessages(dashboard: DashboardModel): Message[] {
  const { userChanges, migrationChanges } = getDashboardChanges(dashboard);

  return [
    {
      content: CHANGES_GENERATION_STANDARD_PROMPT,
      role: Role.system,
    },
    {
      content: `This is the list of panel names, when referring to a panel, please use the title: ${JSON.stringify(
        dashboard.panels.map((panel) => panel.title)
      )}`,
      role: Role.system,
    },
    {
      content: `Summarize the following user changes diff under a "User changes" heading with no special formatting as a bulleted list:\n${userChanges}`,
      role: Role.system,
    },
    {
      content: `Be sure to only include substantial user changes, such as adding or removing entire panels, changing panel titles or descriptions, etc. Ignore other changes and do not include them in the summary. Do not include "User Changes" section if there are no substantial user changes to report.`,
      role: Role.system,
    },
    {
      content: `Threshold step changes of value being removed and replaced with color "green" should always be ignored`,
      role: Role.system,
    },
    {
      content: `In addition to summarizing the user diff changes, add the following sentence at the end of the response "Some autogenerated changes are included to update the dashboard to the latest valid schema version." Only add this sentence if the following migrations diff has substantial changes. Ignore any threshold step changes, templating list changes, and ignore the entire migration diff if it is less than 10 lines long. \n This is the migrations diff:\n${migrationChanges}`,
      role: Role.system,
    },
  ];
}
