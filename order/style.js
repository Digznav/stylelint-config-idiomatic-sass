const css = require('../helpers');

module.exports = [
  ...css.suffix.all(
    // Shorthand
    'background',
    // Extended
    'color',
    'image',
    'repeat',
    'position',
    'position-x',
    'position-y',
    'size',
    'origin',
    'clip',
    'attachment'
  ),
  'color',
  'box-shadow'
];
