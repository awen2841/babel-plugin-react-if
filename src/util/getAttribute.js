function getAttribute(babelTypes, attributes, name) {
  return (attributes || []).find(function (attr) {
    if (babelTypes.isJSXSpreadAttribute(attr)) {
      return false;
    }

    return attr.name.name === name;
  });
}

module.exports = getAttribute;
