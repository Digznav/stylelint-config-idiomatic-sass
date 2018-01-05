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
    special: ['font-size-adjust', 'font-smooth']
  },

  text: [
    'text-align',
    'text-align-last',
    'text-indent',
    ...css.suffix.all(
      // Shorthand
      'text-decoration',
      // Extended
      'color',
      'style',
      'line'
    ),
    'text-transform',
    'text-shadow',
    'text-overflow',
    ...css.suffix.all(
      // Shorthand
      'text-emphasis',
      // Extended
      'color',
      'style',
      'position'
    ),
    'text-justify',
    'letter-spacing',
    'tab-size',
    'word-spacing',
    'word-break',
    'word-wrap',
    'overflow-wrap',
    'white-space',
    'hyphens',
    'hanging-punctuation'
  ],

  list: [
    ...css.suffix.all(
      // Shorthand
      'list-style',
      // Extended
      'type',
      'position',
      'image'
    ),
    'counter-reset',
    'counter-increment'
  ],

  table: [
    'table-layout',
    'border-spacing',
    'border-collapse',
    'vertical-align',
    'empty-cells',
    'caption-side'
  ],

  columns: [
    'columns',
    'column-width',
    'column-count',
    'column-gap',
    'column-rule',
    'column-span',
    'column-fill'
  ]
};
