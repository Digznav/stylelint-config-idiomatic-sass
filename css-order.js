const css = require('./helpers');

const positioning = [
  'position',
  'z-index',
  ...css.trbl(),
  'float',
  'clear'
];

const display = [
  'display',
  'visibility',
  'opacity'
];

const boxModel = [
  ...css.suffix.all('overflow', 'x', 'y'),
  'box-sizing',
  ...css.prefix.all('width', 'min', 'max'),
  ...css.prefix.all('height', 'min', 'max'),
  ...css.trbl('padding'),
  ...css.border(),
  ...css.midfix.all('border-radius', 'top-left', 'top-right', 'bottom-right', 'bottom-left'),
  ...css.suffix.all('border-image', 'source', 'slice', 'width', 'outset', 'repeat'),
  ...css.trbl('margin'),
  ...css.suffix.all('outline', 'width', 'style', 'color', 'offset')
];

const grid = {
  parent: [
    'grid',
    ...css.suffix.all('grid-template', 'rows', 'columns', 'areas'),
    ...css.midfix.all('grid-gap', 'row', 'column'),
    ...css.suffix.get('grid-auto', 'rows', 'columns', 'flow')
  ],
  children: [
    'grid-area',
    ...css.suffix.all('grid-row', 'start', 'end'),
    ...css.suffix.all('grid-column', 'start', 'end')
  ]
};

const flexbox = {
  parent: css.suffix.get('flex', 'flow', 'direction', 'wrap'),
  children: [
    'order',
    ...css.suffix.all('flex', 'grow', 'shrink', 'basis'),
  ]
};

const gridFlexShared = {
  parent: [
    ...css.suffix.get('justify', 'items', 'content'),
    ...css.suffix.get('align', 'items', 'content')
  ],
  children: css.prefix.get('self', 'justify', 'align')
};

module.exports = {
  positioning,
  display,
  boxModel,
  grid,
  flexbox,
  gridFlexShared
}
