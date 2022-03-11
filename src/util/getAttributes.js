function getAttributes(node) {
  if (typeof node === 'undefined') {
    return [];
  }

  if (typeof node.openingElement === 'undefined') {
    return [];
  }

  return node.openingElement.attributes || [];
}

module.exports = getAttributes;
