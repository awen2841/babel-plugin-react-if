var getAttributes = require('./getAttributes');
var includesAttributeName = require('./includesAttributeName');

function childrenHaveAttributes(types, children, names) {
  return children.some(node => {
    var attributes = getAttributes(node);

    return includesAttributeName(types, attributes, names);
  });
}

module.exports = childrenHaveAttributes;
