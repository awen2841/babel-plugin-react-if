const getAttributes = require('./getAttributes');
const includesAttributeName = require('./includesAttributeName');

function childrenHaveAttributes(types, children, names) {
  return children.some((node) => {
    const attributes = getAttributes(node);

    return includesAttributeName(types, attributes, names);
  });
}

module.exports = childrenHaveAttributes;
