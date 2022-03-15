## Installation
As a prerequisite you need to have [Babel](https://github.com/babel/babel) installed and configured in your project.

Install via npm:

```
  npm install babel-plugin-jsx-react-if --save-dev
```

Then you only need to specify `react-if` as Babel plugin, which you would typically do in your `.babelrc`:
```
"plugins": [
  ...
  "babel-plugin-jsx-react-if"
]
```

## r-if

The directive r-if is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value.

```javascript
<h1 r-if="awesome">React is awesome!</h1>
```

## r-else

You can use the r-else directive to indicate an "else block" for r-if:

```javascript
<h1 r-if="awesome">React is awesome!</h1>
<h1 r-else>Oh no 😢</h1>
```

A r-else element must immediately follow a r-if or a r-else-if element - otherwise it will not be recognized.

## r-else-if

The r-else-if, as the name suggests, serves as an "else if block" for r-if. It can also be chained multiple times:

```javascript
<div r-if="type === 'A'">
  A
</div>
<div r-else-if="type === 'B'">
  B
</div>
<div r-else-if="type === 'C'">
  C
</div>
<div r-else>
  Not A/B/C
</div>
```

Similar to r-else, a r-else-if element must immediately follow a r-if or a r-else-if element.
