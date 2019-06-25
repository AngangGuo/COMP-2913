---
id: "es6-arrow-functions"
title: "Arrow Functions"
---

#### Expression Bodies
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ES5
var doubled = numbers.map(function(number) {
  return number * 2;
});

// ES6
const tripled = numbers.map(number => number * 3);
```
- [Arrow Functions (Expression Bodies)](http://es6-features.org/#ExpressionBodies)

#### Statement Bodies
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ES5
numbers.forEach(function(number) {
  if (number % 2) {
    console.log(number);
  }
});

// ES6
numbers.forEach((number) => {
  if (number % 2) {
    console.log(number);
  }
});
```

- [Arrow Functions (Statement Bodies)](http://es6-features.org/#StatementBodies)

#### Lexical this

- [Arrow Functions (Lexical This)](http://es6-features.org/#Lexicalthis)