function includesAttributeName(babelTypes, attributes, names) {
  return (attributes || []).some((attr) => {
    if (babelTypes.isJSXSpreadAttribute(attr)) {
      return false;
    }

    return names.includes(attr.name.name);
  });
}

module.exports = includesAttributeName;
