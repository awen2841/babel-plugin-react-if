const getAttributes = require('./getAttributes');
const getAttribute = require('./getAttribute');
const getJSXElement = require('./getJSXElement');
const attributeNames = require('./constants');
const getAttributeConditionExpression = require('./getAttributeConditionExpression');

function transformChildren(types, children) {
  const data = children.reduce((acc, node) => {
    const attributes = getAttributes(node);

    const attributeWithIf = getAttribute(types, attributes, attributeNames.R_IF);

    if (attributeWithIf) {
      if (typeof acc.setElse === 'function') {
        acc.children.push(acc.setElse(types.NullLiteral()));
      }

      return {
        children: acc.children,
        setElse(no) {
          const conditionExpression = getAttributeConditionExpression(types, attributeNames.R_IF, attributeWithIf);

          const yes = getJSXElement(
            types,
            node,
            attributes.filter((attr) => attr.name.name !== attributeNames.R_IF),
          );

          return types.jSXExpressionContainer(
            types.ConditionalExpression(conditionExpression, yes, no),
          );
        },
      };
    }

    const attributeWithElseIf = getAttribute(types, attributes, attributeNames.R_ELSE_IF);

    if (attributeWithElseIf) {
      if (typeof acc.setElse !== 'function') {
        throw new Error(`Not found ${attributeNames.R_IF}`);
      }

      return {
        children: acc.children,
        setElse(no) {
          const conditionExpression = getAttributeConditionExpression(types, attributeNames.R_ELSE_IF, attributeWithElseIf);

          const yes = getJSXElement(
            types,
            node,
            attributes.filter((attr) => attr.name.name !== attributeNames.R_ELSE_IF),
          );

          return acc.setElse(
            types.ConditionalExpression(conditionExpression, yes, no),
          );
        },
      };
    }

    const attributeWithElse = getAttribute(types, attributes, attributeNames.R_ELSE);

    if (attributeWithElse) {
      if (typeof acc.setElse !== 'function') {
        throw new Error(`Not found ${attributeNames.R_IF}`);
      }

      const no = getJSXElement(
        types,
        node,
        attributes.filter((attr) => attr.name.name !== attributeNames.R_ELSE),
      );

      acc.children.push(
        acc.setElse(no),
      );

      return {
        children: acc.children,
        setElse: undefined,
      };
    }

    if (typeof acc.setElse !== 'function') {
      acc.children.push(node);

      return {
        children: acc.children,
        setElse: undefined,
      };
    }

    acc.children.push(
      acc.setElse(types.NullLiteral()),
    );

    acc.children.push(node);

    return {
      children: acc.children,
      setElse: undefined,
    };
  }, { children: [], setElse: undefined });

  if (typeof data.setElse !== 'function') {
    return data.children;
  }

  data.children.push(data.setElse(types.NullLiteral()));

  return data.children;
}

module.exports = transformChildren;
