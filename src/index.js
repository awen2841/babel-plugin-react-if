var getChildren = require('./util/getChildren');
var childrenHaveAttributes = require('./util/childrenHaveAttributes');
var getJSXElement = require('./util/getJSXElement');
var getAttributes = require('./util/getAttributes');
var getAttribute = require('./util/getAttribute');
var transformChildren = require('./util/transformChildren');
var getAttributeConditionExpression = require('./util/getAttributeConditionExpression');
var attributeNames = require('./util/constants');

module.exports = function (babel) {
  var visitor = {
    JSXElement: function (path) {
      var attributes = getAttributes(path.node);

      var children = getChildren(babel.types, path.node);

      if (!childrenHaveAttributes(
        babel.types,
        children,
        [attributeNames.R_IF, attributeNames.R_ELSE_IF, attributeNames.R_ELSE]
      )) {
        var attributeWithIf = getAttribute(
          babel.types,
          attributes,
          attributeNames.R_IF
        );

        if (!attributeWithIf) {
          return;
        }

        var existsConditionExpression = getAttributeConditionExpression(
          babel.types, attributeNames.R_IF, attributeWithIf
        );

        path.replaceWithMultiple(
          babel.types.ConditionalExpression(
            existsConditionExpression,
            getJSXElement(
              babel.types,
              path.node,
              attributes.filter((attr) => attr.name.name !== attributeNames.R_IF),
            ),
            babel.types.NullLiteral()
          )
        );

        return;
      }

      var newChildren = transformChildren(babel.types, children);

      path.replaceWithMultiple([
        getJSXElement(
          babel.types,
          path.node,
          attributes,
          newChildren,
        )
      ]);
    }
  };

  return {
    inherits: require('babel-plugin-syntax-jsx'),
    visitor: visitor
  };
};
