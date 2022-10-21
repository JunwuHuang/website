const { readdir } = require("node:fs/promises");

module.exports = function (context, options) {
  return {
    name: "generate-tree",
    async loadContent() {
      const paths = options.paths ?? [];
      const entries = await Promise.all(
        paths.map((path) => readdir(path).then((files) => [path, files]))
      );
      return Object.fromEntries(new Map(entries));
    },
    contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
  };
};
