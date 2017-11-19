/* eslint-disable no-console */

const $ = require('./helpers');

const positioningRaw = ['position', 'z-index', 'top', 'right', 'bottom', 'left', 'float', 'clear'];

const positioning = ['position', 'z-index', ...$.trbl(), 'float', 'clear'];

console.log('Positioning: ', positioningRaw.join(' ') === positioning.join(' '));

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

console.log('Box model: ', boxModelRaw.join(' ') === boxModel.join(' '));

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
    ...$.suffix('grid-template', 'rows', 'columns', 'areas'),
    ...$.midfix('grid-gap', 'row', 'column'),
    'grid-auto-rows',
    'grid-auto-columns',
    'grid-auto-flow'
  ],
  children: ['grid-area', ...$.suffix('grid-row', 'start', 'end'), ...$.suffix('grid-column', 'start', 'end')]
};

console.log('Grid parent: ', gridRaw.parent.join(' ') === grid.parent.join(' '));
console.log('Grid children: ', gridRaw.children.join(' ') === grid.children.join(' '));
