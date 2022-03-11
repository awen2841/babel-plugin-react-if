function getChildren(babelTypes, node) {
  var children = babelTypes.react.buildChildren(node);

  return children.map(function (item) {
    if (babelTypes.isStringLiteral(item)) {
      return babelTypes.JSXText(item.value);
    }

    if (
      babelTypes.isIdentifier(item) ||
      babelTypes.isMemberExpression(item) ||
      babelTypes.isCallExpression(item) ||
      babelTypes.isConditionalExpression(item) ||
      babelTypes.isLogicalExpression(item) ||
      babelTypes.isFunctionExpression(item) ||
      babelTypes.isArrowFunctionExpression(item) ||
      babelTypes.isArrayExpression(item) ||
      babelTypes.isNumericLiteral(item) ||
      babelTypes.isBooleanLiteral(item)
    ) {
      return babelTypes.jSXExpressionContainer(item);
    }

    return item;
  });
}

module.exports = getChildren;
