const css = require('../helpers');

module.exports = {
  grid: [
    // Parent
    'grid',
    ...css.suffix.all('grid-template', 'rows', 'columns', 'areas'),
    ...css.midfix.all('grid-gap', 'row', 'column'),
    ...css.suffix.get('grid-auto', 'rows', 'columns', 'flow'),

    // Children
    'grid-area',
    ...css.suffix.all('grid-row', 'start', 'end'),
    ...css.suffix.all('grid-column', 'start', 'end')
  ],

  flexbox: [
    // Parent
    ...css.suffix.get('flex', 'flow', 'direction', 'wrap'),

    // Children
    'order',
    ...css.suffix.all('flex', 'grow', 'shrink', 'basis')
  ],

  shared: [
    // Parent
    ...css.suffix.get('justify', 'items', 'content'),
    ...css.suffix.get('align', 'items', 'content'),

    // Children
    ...css.prefix.get('self', 'justify', 'align')
  ]
};
