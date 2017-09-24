import { configure } from "@storybook/react";

import "../src/css/index.css";
import "../src/css/fonts.css";
import "../src/css/font-awesome.css";

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(path => req(path));
}

configure(loadStories, module);
