function includesAttributeName(babelTypes, attributes, names) {
  return (attributes || []).some(function (attr) {
    if (babelTypes.isJSXSpreadAttribute(attr)) {
      return false;
    }

    return names.includes(attr.name.name);
  });
}

module.exports = includesAttributeName;
