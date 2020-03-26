import { configure } from "@storybook/react";

const req = require.context("../src/", true, /.stor(y|ies).tsx$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);
