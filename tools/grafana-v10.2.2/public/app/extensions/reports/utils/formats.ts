import { upperFirst } from 'lodash';

import { ReportFormat } from '../../types';

export const getFormatsDisplay = (formats: ReportFormat[]) => {
  return upperFirst(
    formats
      .map((format) => {
        switch (format) {
          case 'csv':
          case 'pdf':
            return format.toUpperCase();
          case 'image':
            return 'embedded image';
        }
      })
      .join(', ')
  );
};
