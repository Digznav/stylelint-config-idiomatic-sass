const css = require('../helpers');

module.exports = [
  ...css.suffix.all('overflow', 'x', 'y'),
  'box-sizing',
  ...css.prefix.all('width', 'min', 'max'),
  ...css.prefix.all('height', 'min', 'max'),
  ...css.trbl('padding'),
  ...css.border(),
  ...css.midfix.all(
    // Shorthand
    'border-radius',
    // Extended
    'top-left',
    'top-right',
    'bottom-right',
    'bottom-left'
  ),
  ...css.suffix.all(
    // Shorthand
    'border-image',
    // Extended
    'source',
    'slice',
    'width',
    'outset',
    'repeat'
  ),
  ...css.trbl('margin'),
  ...css.suffix.all(
    // Shorthand
    'outline',
    // Extended
    'width',
    'style',
    'color',
    'offset'
  )
];
