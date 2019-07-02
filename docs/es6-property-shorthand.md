---
id: "es6-property-shorthand"
title: "Property Shorthand"
---

Shorter syntax for defining Objects with properties.

ES6

```js
const color = 'red';
const year = 2015;
const car = { brand: 'Toyota', color, year }; // { brand: 'Toyota', color: 'red', year: 2015 }
```

ES5

```js
var color = 'red';
var year = 2015;
var car = { brand: 'Toyota', color: color, year: year }; // { brand: 'Toyota', color: 'red', year: 2015 }
```

[Property Shorthand](http://es6-features.org/#PropertyShorthand)