import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'storybook-msw-addon';
import { handlers } from '../mocks/handlers';

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    parameters: {
      msw: {
        handlers: handlers,
      },
    },
    loaders: [mswLoader],
  },
};

export default preview;
