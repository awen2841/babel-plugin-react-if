const getChildren = require('./util/getChildren');
const childrenHaveAttributes = require('./util/childrenHaveAttributes');
const getJSXElement = require('./util/getJSXElement');
const getAttributes = require('./util/getAttributes');
const getAttribute = require('./util/getAttribute');
const transformChildren = require('./util/transformChildren');
const getAttributeConditionExpression = require('./util/getAttributeConditionExpression');
const attributeNames = require('./util/constants');

module.exports = function (babel) {
  const visitor = {
    JSXElement(path) {
      const attributes = getAttributes(path.node);

      const children = getChildren(babel.types, path.node);

      if (!childrenHaveAttributes(
        babel.types,
        children,
        [attributeNames.R_IF, attributeNames.R_ELSE_IF, attributeNames.R_ELSE],
      )) {
        const attributeWithIf = getAttribute(
          babel.types,
          attributes,
          attributeNames.R_IF,
        );

        if (!attributeWithIf) {
          return;
        }

        const existsConditionExpression = getAttributeConditionExpression(
          babel.types,
          attributeNames.R_IF,
          attributeWithIf,
        );

        path.replaceWithMultiple(
          babel.types.ConditionalExpression(
            existsConditionExpression,
            getJSXElement(
              babel.types,
              path.node,
              attributes.filter((attr) => attr.name.name !== attributeNames.R_IF),
            ),
            babel.types.NullLiteral(),
          ),
        );

        return;
      }

      const newChildren = transformChildren(babel.types, children);

      path.replaceWithMultiple([
        getJSXElement(
          babel.types,
          path.node,
          attributes,
          newChildren,
        ),
      ]);
    },
  };

  return {
    inherits: require('@babel/plugin-syntax-jsx').default,
    visitor,
  };
};
