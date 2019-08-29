const npsUtils = require('nps-utils'); // eslint-disable-line import/no-extraneous-dependencies

const serialize = npsUtils.series;

const prettier = 'prettier --write';
const eslint = 'eslint "**/*.js"';

module.exports = {
  scripts: {
    test: 'mocha',
    js: {
      format: `${prettier} --single-quote --print-width=140 --parser=flow "**/*.js"`,
      lint: {
        default: `${eslint} || true`,
        fix: `${eslint} --fix`,
        strict: eslint
      }
    },
    link: serialize(serialize.nps('js.lint.strict'), 'npm link'),
    bump: serialize(serialize.nps('js.lint.strict'), 'npm publish')
  }
};
