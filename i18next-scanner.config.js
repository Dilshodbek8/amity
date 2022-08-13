var fs = require("fs");
var chalk = require("chalk");

module.exports = {
  input: [
    "pages/**/*.{js,jsx}",
    "components/**/*.{js,jsx}",
    // Use ! to filter out files or directories
    "!pages/**/*.spec.{js,jsx}",
    "!components/**/*.spec.{js,jsx}",
    "!**/node_modules/**",
  ],
  output: "./",
  options: {
    debug: true,
    func: {
      list: ["t"],
      extensions: [".js", ".jsx"],
    },
    trans: false,
    sort: true,
    lngs: ["uz", "ru", "en"],
    ns: ["common"],
    defaultLng: "uz",
    defaultNs: "common",
    removeUnusedKeys: true,
    defaultValue: function (_, __, key) {
      return key;
    },
    resource: {
      loadPath: "public/locales/{{lng}}/{{ns}}.json",
      savePath: "public/locales/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
  },
  transform: function customTransform(file, enc, done) {
    "use strict";
    const parser = this.parser;
    const content = fs.readFileSync(file.path, enc);
    let count = 0;

    parser.parseFuncFromString(
      content,
      { list: ["i18next._", "i18next.__"] },
      (key, options) => {
        parser.set(
          key,
          Object.assign({}, options, {
            nsSeparator: false,
            keySeparator: false,
          })
        );
        ++count;
      }
    );

    if (count > 0) {
      console.log(
        `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
          JSON.stringify(file.relative)
        )}`
      );
    }

    done();
  },
};
