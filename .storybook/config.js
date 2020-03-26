import { configure } from '@storybook/react';

const req = require.context('../src', true, /.stor(y|ies).(tsx|mdx)$/);

const loadStories = () =>
  req
    .keys()
    .map(req)
    .filter(reqFiltered => Boolean(reqFiltered.default));

configure(loadStories, module);
