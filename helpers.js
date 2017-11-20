module.exports = {
  prefix: {
    get(property, ...prefixes) {
      return prefixes.map(pfx => `${pfx}-${property}`);
    },
    all(property, ...prefixes) {
      return [property, ...this.get(property, ...prefixes)];
    }
  },
  midfix: {
    get(property, ...midfixes) {
      const holder = property.split('-');
      const last = holder.pop();

      return midfixes.map(mdfx => `${holder.join('-')}${holder.length > 0 ? '-' : ''}${mdfx}-${last}`);
    },
    all(property, ...prefixes) {
      return [property, ...this.get(property, ...prefixes)];
    }
  },
  suffix: {
    get(property, ...suffixes) {
      return suffixes.map(sffx => `${property}-${sffx}`);
    },
    all(property, ...suffixes) {
      return [property, ...this.get(property, ...suffixes)];
    }
  },
  trbl(property) {
    const rules = [];
    let prop = '';

    if (property) {
      rules.push(property);
      prop = `${property}-`;
    }

    return rules.concat([`${prop}top`, `${prop}right`, `${prop}bottom`, `${prop}left`]);
  },
  border() {
    const borderDesc = ['width', 'style', 'color'];
    const borderExtend = this.trbl('border')
      .map(value => this.suffix.all(value, ...borderDesc))
      .reduce((a, b) => a.concat(b));

    return borderExtend;
  }
};
