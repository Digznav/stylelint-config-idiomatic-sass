function prefix(property, ...prefixes) {
  return [property, ...prefixes.map(pfx => `${pfx}-${property}`)];
}

function suffix(property, ...suffixes) {
  return [property, ...suffixes.map(sffx => `${property}-${sffx}`)];
}

function trbl(property) {
  var rules = [];
  var prop = '';

  if (property) {
    rules.push(property);
    prop = `${property}-`;
  }

  return rules.concat([
    `${prop}top`,
    `${prop}right`,
    `${prop}bottom`,
    `${prop}left`
  ]);
}

console.log(prefix('width', 'min', 'max'));
console.log(suffix('border', 'width', 'style', 'color'));
console.log(trbl());
console.log(trbl('padding'));
