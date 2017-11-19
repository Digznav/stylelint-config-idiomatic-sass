function prefix(property, ...prefixes) {
  return [property, ...prefixes.map(pfx => `${pfx}-${property}`)];
}

function midfix(property, ...midfixes) {
  const holder = property.split('-');
  const last = holder.pop();

  return [property, ...midfixes.map(mdfx => `${holder.join('-')}-${mdfx}-${last}`)];
}

function suffix(property, ...suffixes) {
  return [property, ...suffixes.map(sffx => `${property}-${sffx}`)];
}

const cssProperty = {
  prefix: {
    get(property, ...prefixes) {
      return prefixes.map(pfx => `${pfx}-${property}`);
    },
    all(property, ...prefixes) {
      return [property, ...cssProperty.prefix.get(property, ...prefixes)];
    }
  },
  midfix: {
    get(property, ...midfixes) {
      const holder = property.split('-');
      const last = holder.pop();

      return midfixes.map(mdfx => `${holder.join('-')}${holder.length > 0 ? '-' : ''}${mdfx}-${last}`);
    },
    all(property, ...prefixes) {
      return [property, ...cssProperty.midfix.get(property, ...prefixes)];
    }
  },
  suffix: {
    get(property, ...suffixes) {
      return suffixes.map(sffx => `${property}-${sffx}`);
    },
    all(property, ...suffixes) {
      return [property, ...cssProperty.suffix.get(property, ...suffixes)];
    }
  }
};

function trbl(property) {
  var rules = [];
  var prop = '';

  if (property) {
    rules.push(property);
    prop = `${property}-`;
  }

  return rules.concat([`${prop}top`, `${prop}right`, `${prop}bottom`, `${prop}left`]);
}

function border() {
  const borderDesc = ['width', 'style', 'color'];
  const borderExtend = trbl('border')
    .map(value => suffix(value, ...borderDesc))
    .reduce((a, b) => a.concat(b));

  return borderExtend;
}

module.exports = {
  prefix,
  midfix,
  suffix,
  trbl,
  border,
  cssProperty
};
