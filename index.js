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

        'columns',
        'column-gap',
        'column-fill',
        'column-rule',
        'column-span',
        'column-count',
        'column-width',

        'transition',
        'transition-property',
        'transition-duration',
        'transition-timing-function',
        'transition-delay',
        'transform',
        'transform-origin',
        'transform-style',
        'animation',
        'animation-duration',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode',
        'animation-play-state',
        'animation-name',

        'table-layout',
        'empty-cells',
        'caption-side',
        'border-spacing',
        'border-collapse',
        'vertical-align',

        'cursor',
        'content',
        'quotes',
        'resize',
        'clip',
        'zoom',
        'user-select',
        'pointer-events'
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
