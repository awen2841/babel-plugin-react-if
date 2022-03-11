var getAttributes = require('./getAttributes');
var getAttribute = require('./getAttribute');
var getJSXElement = require('./getJSXElement');
var attributeNames = require('./constants');
var getAttributeConditionExpression = require('./getAttributeConditionExpression');

function transformChildren(types, children) {
  var data = children.reduce(function (acc, node) {
    var attributes = getAttributes(node);

    var attributeWithIf = getAttribute(types, attributes, attributeNames.R_IF);

    if (attributeWithIf) {
      if (typeof acc.setElse !== 'undefined') {
        acc.children.push(acc.setElse(types.NullLiteral()));
      }

      return {
        children: acc.children,
        setElse: function (no) {
          var conditionExpression = getAttributeConditionExpression(
            types, attributeNames.R_IF, attributeWithIf
          );

          var yes = getJSXElement(
            types,
            node,
            attributes.filter((attr) => attr.name.name !== attributeNames.R_IF),
          );

          return types.jSXExpressionContainer(
            types.ConditionalExpression(conditionExpression, yes, no)
          );
        }
      };
    }

    var attributeWithElseIf = getAttribute(types, attributes, attributeNames.R_ELSE_IF);

    if (attributeWithElseIf) {
      if (typeof acc.setElse === 'undefined') {
        throw new Error('Not found ' + attributeNames.R_IF);
      }

      return {
        children: acc.children,
        setElse: function (no) {
          var conditionExpression = getAttributeConditionExpression(
            types, attributeNames.R_ELSE_IF, attributeWithElseIf
          );

          var yes = getJSXElement(
            types,
            node,
            attributes.filter((attr) => attr.name.name !== attributeNames.R_ELSE_IF),
          );

          return acc.setElse(
              types.ConditionalExpression(conditionExpression, yes, no)
          );
        }
      };
    }

    var attributeWithElse = getAttribute(types, attributes, attributeNames.R_ELSE);

    if (attributeWithElse) {
      if (typeof acc.setElse === 'undefined') {
        throw new Error('Not found ' + attributeNames.R_IF);
      }

      var no = getJSXElement(
        types,
        node,
        attributes.filter((attr) => attr.name.name !== attributeNames.R_ELSE),
      );

      acc.children.push(
        acc.setElse(no)
      );

      return {
        children: acc.children,
        setElse: undefined
      };
    }

    if (typeof acc.setElse === 'undefined') {
      acc.children.push(node);

      return {
        children: acc.children,
        setElse: undefined
      };
    }

    acc.children.push(
      acc.setElse(types.NullLiteral())
    );

    acc.children.push(node);

    return {
      children: acc.children,
      setElse: undefined
    };
  }, { children: [], setElse: undefined });

  if (typeof data.setElse === 'undefined') {
    return data.children;
  }

  data.children.push(data.setElse(types.NullLiteral()));

  return data.children;
}

module.exports = transformChildren;
