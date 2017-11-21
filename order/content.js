const css = require('../helpers');

module.exports = {
  font: {
    base: [
      // Shorthand
      'font',
      // Extended
      'font-style',
      'font-weight',
      'font-stretch',
      'font-size',
      'line-height',
      'font-family'
    ],
    variant: css.suffix.all(
      // Shorthand
      'font-variant',
      // Extended
      'caps',
      'numeric',
      'alternates',
      'ligatures',
      'east-asian'
    ),
    special: [
      'font-size-adjust',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-smooth'
    ]
  },

  text: [
    'text-align',
    'text-align-last',
    'text-indent',
    'text-decoration',
    'text-transform',
    'text-outline',
    'text-shadow',
    'text-wrap',
    'text-overflow',
    'text-overflow-ellipsis',
    'text-overflow-mode',
    'text-emphasis',
    'text-emphasis-color',
    'text-emphasis-style',
    'text-emphasis-position',
    'text-justify',
    'letter-spacing',
    'tab-size',
    'word-spacing',
    'word-wrap',
    'word-break',
    'overflow-wrap',
    'white-space',
    'hyphens'
  ],

  list: css.suffix.all(
    // Shorthand
    'list-style',
    // Extended
    'type',
    'position',
    'image'
  )
};
