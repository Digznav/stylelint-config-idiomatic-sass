const npsUtils = require('nps-utils'); // eslint-disable-line import/no-extraneous-dependencies

const serialize = npsUtils.series;

const localBins = {
  stylelint: './node_modules/.bin/stylelint --syntax scss "**/*.scss"',
  prettier: './node_modules/.bin/prettier --write',
  eslint: './node_modules/.bin/eslint "**/*.js"'
};

module.exports = {
  scripts: {
    test: 'mocha',

    js: {
      format: `${localBins.prettier} --single-quote --print-width=140 --parser=flow "**/*.js"`,
      lint: {
        default: `${localBins.eslint} || true`,
        fix: `${localBins.eslint} --fix`,
        strict: localBins.eslint
      }
    },

    sass: {
      format: `${localBins.stylelint} --fix`,
      lint: {
        default: `${localBins.stylelint} || true`,
        strict: `${localBins.stylelint}`
      }
    },

    link: serialize(serialize.nps('js.lint.strict'), 'npm link'),

    bump: serialize(serialize.nps('js.lint.strict'), 'npm publish')
  }
};
