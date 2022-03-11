var getChildren = require('./getChildren');

function getJSXElement(babelTypes, node, attributes, children) {
  if (typeof children === 'undefined') {
    return babelTypes.jSXElement(
      babelTypes.JSXOpeningElement(
        babelTypes.jSXIdentifier(node.openingElement.name.name),
        attributes,
        true
      ),
      null,
      getChildren(babelTypes, node),
      true
    );
  }

  return babelTypes.jSXElement(
    babelTypes.JSXOpeningElement(
      babelTypes.jSXIdentifier(node.openingElement.name.name),
      attributes,
      true
    ),
    null,
    children,
    true
  );
}

module.exports = getJSXElement;
