const { assert } = require('chai');

const { positioning, boxModel, grid, flexbox, gridFlexShared } = require('./css-order');

describe('CSS', () => {
  describe('Positioning', () => {
    it('should have the same css properties', () => {
      const positioningExpected = [
        'position',
        'z-index',
        'top',
        'right',
        'bottom',
        'left',
        'float',
        'clear'
      ];

      assert.deepEqual(positioningExpected, positioning);
    });
  });

  describe('Box model', () => {
    it('should have the same css properties', () => {
      const boxModelExpected = [
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

      assert.deepEqual(boxModelExpected, boxModel);
    });
  });

  describe('Grid', () => {
    it('should have the same css properties', () => {
      const gridExpected = {
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
        children: [
          'grid-area',
          'grid-row',
          'grid-row-start',
          'grid-row-end',
          'grid-column',
          'grid-column-start',
          'grid-column-end'
        ]
      };

      assert.deepEqual(gridExpected, grid);
    });
  });

  describe('Flexbox', () => {
    it('should have the same css properties', () => {
      const flexboxExpected = {
        parent: [
          'flex-flow',
          'flex-direction',
          'flex-wrap'
        ],
        children: [
          'order',
          'flex',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
        ]
      };

      assert.deepEqual(flexboxExpected, flexbox);
    });
  });

  describe('Shared properties for Grid and Flexbox', () => {
    it('should have the same css properties', () => {
      const gridFlexSharedExpected = {
        parent: [
          'justify-items',
          'justify-content',
          'align-items',
          'align-content'
        ],
        children: [
          'justify-self',
          'align-self'
        ]
      };

      assert.deepEqual(gridFlexSharedExpected, gridFlexShared);
    })
  });
});
