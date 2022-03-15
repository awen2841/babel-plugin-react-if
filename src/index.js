const getChildren = require('./util/getChildren');
const getJSXElement = require('./util/getJSXElement');
const getAttributes = require('./util/getAttributes');
const getAttribute = require('./util/getAttribute');
const transformChildren = require('./util/transformChildren');
const getAttributeConditionExpression = require('./util/getAttributeConditionExpression');
const attributeNames = require('./util/constants');

module.exports = function (babel) {
  let setElse = null;

  const visitor = {
    JSXElement(path) {
      const { node } = path;
      const { types } = babel;

      const attributes = getAttributes(node);

      const children = getChildren(types, node);

      const attributeWithIf = getAttribute(types, attributes, attributeNames.R_IF);

      if (attributeWithIf) {
        const conditionExpression = getAttributeConditionExpression(types, attributeNames.R_IF, attributeWithIf);

        const yes = getJSXElement(
          types,
          node,
          attributes.filter((attr) => attr.name.name !== attributeNames.R_IF),
          transformChildren(types, children),
        );

        setElse = (no) => types.jSXExpressionContainer(
          types.ConditionalExpression(conditionExpression, types.NullLiteral(), no),
        );

        path.replaceWith(
          types.jSXExpressionContainer(
            types.ConditionalExpression(conditionExpression, yes, types.NullLiteral()),
          ),
        );
      }

      const attributeWithElseIf = getAttribute(types, attributes, attributeNames.R_ELSE_IF);

      if (attributeWithElseIf) {
        if (typeof setElse !== 'function') {
          throw new Error(`Not found ${attributeNames.R_IF}`);
        }

        const conditionExpression = getAttributeConditionExpression(types, attributeNames.R_ELSE_IF, attributeWithElseIf);

        path.replaceWith(
          setElse(
            types.ConditionalExpression(
              conditionExpression,
              getJSXElement(
                types,
                node,
                attributes.filter((attr) => attr.name.name !== attributeNames.R_ELSE_IF),
                transformChildren(types, children),
              ),
              types.NullLiteral(),
            ),
          ),
        );

        const oldSetElse = setElse;

        setElse = (no) => oldSetElse(types.ConditionalExpression(conditionExpression, types.NullLiteral(), no));
      }

      const attributeWithElse = getAttribute(types, attributes, attributeNames.R_ELSE);

      if (attributeWithElse) {
        if (typeof setElse !== 'function') {
          throw new Error(`Not found ${attributeNames.R_IF}`);
        }

        path.replaceWith(
          setElse(
            getJSXElement(
              types,
              node,
              attributes.filter((attr) => attr.name.name !== attributeNames.R_ELSE),
              transformChildren(types, children),
            ),
          ),
        );

        setElse = null;
      }
    },
  };

  return {
    inherits: require('@babel/plugin-syntax-jsx').default,
    visitor,
  };
};
