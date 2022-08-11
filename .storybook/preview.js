import '../src/stories/UI/styles/dimensions/b-spacing.scss';
import '../src/stories/UI/styles/dimensions/b-sizing.scss';
import '../src/stories/UI/styles/border/border.scss';
import '../src/stories/UI/styles/display/display.scss';
import '../src/stories/UI/styles/position/position.scss';
import { themes } from '@storybook/theming';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'rgba(190,187,187,0.24)'
      }
    ]
  }
}