import '../src/stories/UI/styles/dimensions/b-spacing.scss';
import '../src/stories/UI/styles/dimensions/b-sizing.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}