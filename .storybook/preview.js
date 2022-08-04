import '../src/stories/UI/styles/dimensions/b-margin.scss';
import '../src/stories/UI/styles/dimensions/b-padding.scss';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}