const package = require("./package.json");
const rules = require("./configs/rules.config");
const { aliases } = require("./configs/aliases.config");

module.exports = {
  entry: "./src/index",
  output: {
    filename: package.main,
    library: "",
    libraryTarget: "commonjs"
  },
  resolve: {
    alias: aliases,
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules
  }
};
