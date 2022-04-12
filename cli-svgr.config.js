const defaultIndexTemplate = require("./index-template");

module.exports = {
  jsxRuntime: "automatic",
  indexTemplate: defaultIndexTemplate, // we give our custom index template
  typescript: true,
  ext: "tsx",
  outDir: "./src/components/icon",
  icon: 24, // default icon size
  svgoConfig: {
    plugins: [
      {
        name: "preset-default", // default plugin presef for svgo
        params: {
          overrides: {
            removeViewBox: false, // keep viewbox to be able to change icon size
          },
        },
      },
    ],
  },
};
