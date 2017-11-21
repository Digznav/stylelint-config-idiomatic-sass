const css = require('../helpers');

module.exports = [
  ...css.suffix.all(
    'background',
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
  'color'
]