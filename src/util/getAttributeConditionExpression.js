function getAttributeConditionExpression(babelTypes, nameAttribute, attribute) {
  if (typeof attribute === 'undefined' || attribute.value === null) {
    return babelTypes.booleanLiteral(true);
  }

  return attribute.value.expression;
}

module.exports = getAttributeConditionExpression;
