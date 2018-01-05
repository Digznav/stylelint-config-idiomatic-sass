const positioning = require('./order/positioning');
const display = require('./order/display');
const boxModel = require('./order/box-model');
const layout = require('./order/layout');
const style = require('./order/style');
const content = require('./order/content');
const effects = require('./order/effects');

module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['import', 'else', 'debug', 'warn', 'error']
      }
    ],
    'declaration-block-no-duplicate-properties': true,
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else']
      }
    ],
    'color-hex-length': 'long',
    'max-nesting-depth': 4,
    'order/properties-alphabetical-order': null,
    'order/properties-order': [
      [
        ...positioning,
        ...display,
        ...boxModel,
        ...layout.grid,
        ...layout.flexbox,
        ...layout.shared,
        ...style,
        ...content.font.base,
        ...content.font.variant,
        ...content.font.special,
        ...content.text,
        ...content.list,
        ...content.table,
        ...content.columns,
        ...effects.transition,
        ...effects.transform,
        ...effects.animation
      ],
      {
        unspecified: 'bottom'
      }
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment']
      }
    ],
    'selector-max-id': 1
  }
};
