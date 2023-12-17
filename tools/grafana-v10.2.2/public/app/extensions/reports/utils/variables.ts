import { variableAdapters } from 'app/features/variables/adapters';
import { hasOptions, isQuery } from 'app/features/variables/guard';
import { VariableModel, VariableRefresh } from 'app/features/variables/types';

import { Report } from '../../types';

/**
 * Convert variable values to a map like:
 * { "myVar": ["var1", "var2"] }
 * @param variables
 */
export const toReportVariables = (variables?: VariableModel[]): Record<string, string[]> => {
  if (!variables?.length) {
    return {};
  }

  return Object.fromEntries(
    variables.map((variable) => {
      const { getValueForUrl } = variableAdapters.get(variable.type);
      const value = getValueForUrl(variable);
      return [variable.name, Array.isArray(value) ? value : [value]];
    })
  );
};

export const applyDefaultVariables = (variables: VariableModel[], reportVariables?: Report['templateVars']) => {
  if (!reportVariables || !Object.keys(reportVariables).length) {
    return variables;
  }

  return variables.map((variable) => {
    const reportVariable = reportVariables[variable.name];
    if (!reportVariable || !hasOptions(variable)) {
      return variable;
    }

    const values = reportVariable
      .map((str) => variable.options.find((opt) => opt.value === str) || { text: str, value: str })
      .filter(Boolean);

    return {
      ...variable,
      current: { ...variable.current, text: values.map((val) => val?.text), value: values.map((val) => val?.value) },
      options: variable.options.map((option) => ({
        ...option,
        selected: typeof option.value === 'string' && reportVariable.includes(option.value),
      })),
    };
  });
};

export const collectVariables = () => {
  const variablePrefix = 'var-';
  const urlParams = new URLSearchParams(window.location.search);
  const variables: Record<string, string[]> = {};

  for (const [key, value] of urlParams.entries()) {
    if (key.startsWith(variablePrefix)) {
      const newKey = key.replace(variablePrefix, '');
      variables[newKey] = [...(variables[newKey] || []), value];
    }
  }

  return variables;
};

export const refreshOnTimeRange = (variables: VariableModel[]) => {
  return variables.some((variable) => isQuery(variable) && variable.refresh === VariableRefresh.onTimeRangeChanged);
};
