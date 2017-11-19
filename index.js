const $ = require('./helpers');

const positioning = ['position', 'z-index', ...$.trbl(), 'float', 'clear'];

const display = ['display', 'visibility', 'opacity'];

const boxModel = [
  ...$.suffix('overflow', 'x', 'y'),
  'box-sizing',
  ...$.prefix('width', 'min', 'max'),
  ...$.prefix('height', 'min', 'max'),
  ...$.trbl('padding'),
  ...$.border(),
  ...$.midfix('border-radius', 'top-left', 'top-right', 'bottom-right', 'bottom-left'),
  ...$.suffix('border-image', 'source', 'slice', 'width', 'outset', 'repeat'),
  ...$.trbl('margin'),
  ...$.suffix('outline', 'width', 'style', 'color', 'offset')
];

// Parent
//   justify-items
//   align-items
//   justify-content
//   align-content
// Children
//   justify-self
//   align-self

const grid = {
  parent: [
    'grid',
    'grid-template',
    'grid-template-rows',
    'grid-template-columns',
    'grid-template-areas',
    'grid-gap',
    'grid-row-gap',
    'grid-column-gap',
    'grid-auto-rows',
    'grid-auto-columns',
    'grid-auto-flow'
  ],
  children: ['grid-area', 'grid-row', 'grid-row-start', 'grid-row-end', 'grid-column', 'grid-column-start', 'grid-column-end']
};

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
        ...grid.parent,
        ...grid.children,
        'flex-direction',
        'flex-wrap',
        'flex-flow',
        'justify-content',
        'align-items',
        'align-content',
        'order',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'align-self',
        ...boxModel,
        'background',
        'background-color',
        'background-image',
        'background-repeat',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-size',
        'background-origin',
        'background-clip',
        'background-attachment',
        'color',
        'font',
        'font-family',
        'font-size',
        'font-weight',
        'font-style',
        'font-variant',
        'font-size-adjust',
        'font-stretch',
        'font-effect',
        'font-emphasize',
        'font-emphasize-position',
        'font-emphasize-style',
        'font-smooth',
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
        'line-height',
        'letter-spacing',
        'tab-size',
        'word-spacing',
        'word-wrap',
        'word-break',
        'overflow-wrap',
        'white-space',
        'hyphens',
        'list-style',
        'list-style-image',
        'list-style-position',
        'list-style-type',
        'counter-reset',
        'counter-increment',
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
        'box-decoration-break',
        'box-shadow',
        'cursor',
        'content',
        'quotes',
        'resize',
        'user-select',
        'nav-index',
        'nav-up',
        'nav-right',
        'nav-down',
        'nav-left',
        'clip',
        'zoom',
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
