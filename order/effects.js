const css = require('../helpers');

module.exports = {
  transition: css.suffix.all(
    // Shorthand
    'transition',
    // Extended
    'property',
    'duration',
    'timing-function',
    'delay'
  ),

  transform: css.suffix.all(
    // Shorthand
    'transform',
    // Extended
    'box',
    'origin',
    'style'
  ),

  animation: css.suffix.all(
    // Shorthand
    'animation',
    // Extended
    'name',
    'duration',
    'timing-function',
    'delay',
    'iteration-count',
    'direction',
    'fill-mode',
    'play-state'
  )
};
