import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'storybook-msw-addon';
import { handlers } from '../mocks/handlers';
import '../src/index.css';

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
  decorators: [
    withThemeByDataAttribute({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }),
  ],
};

export default preview;
