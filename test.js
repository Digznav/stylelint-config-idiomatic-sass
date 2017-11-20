const { assert } = require('chai');

const css = require('./helpers');

describe('CSS', () => {
  describe('Positioning', () => {
    it('should have the same css properties', () => {
      const positioningRaw = ['position', 'z-index', 'top', 'right', 'bottom', 'left', 'float', 'clear'];
      const positioning = ['position', 'z-index', ...css.trbl(), 'float', 'clear'];

      assert.deepEqual(positioningRaw, positioning);
    });
  });

  describe('Box model', () => {
    it('should have the same css properties', () => {
      const boxModelRaw = [
        'overflow',
        'overflow-x',
        'overflow-y',
        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-top',
        'border-top-width',
        'border-top-style',
        'border-top-color',
        'border-right',
        'border-right-width',
        'border-right-style',
        'border-right-color',
        'border-bottom',
        'border-bottom-width',
        'border-bottom-style',
        'border-bottom-color',
        'border-left',
        'border-left-width',
        'border-left-style',
        'border-left-color',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-image',
        'border-image-source',
        'border-image-slice',
        'border-image-width',
        'border-image-outset',
        'border-image-repeat',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'outline',
        'outline-width',
        'outline-style',
        'outline-color',
        'outline-offset'
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

      assert.deepEqual(boxModelRaw, boxModel);
    });
  });

  describe('Grid', () => {
    it('should have the same css properties', () => {
      const gridRaw = {
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
      const grid = {
        parent: [
          'grid',
          ...css.suffix.all('grid-template', 'rows', 'columns', 'areas'),
          ...css.midfix.all('grid-gap', 'row', 'column'),
          ...css.suffix.get('grid-auto', 'rows', 'columns', 'flow')
        ],
        children: ['grid-area', ...css.suffix.all('grid-row', 'start', 'end'), ...css.suffix.all('grid-column', 'start', 'end')]
      };

      assert.deepEqual(gridRaw, grid);
    });
  });
});
