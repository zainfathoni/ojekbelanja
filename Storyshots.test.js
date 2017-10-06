import initStoryshots from "@storybook/addon-storyshots";

require("./.storybook/shim.js");
global.requestAnimationFrame(() => {});

initStoryshots();
