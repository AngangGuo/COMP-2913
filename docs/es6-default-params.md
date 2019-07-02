---
id: "es6-default-params"
title: "Default Parameters"
---

Allows defining a default value to parameters in a function. If the parameter is undefined, it will
take the default value specified.

```js
function multiply(x, y = 2) {
  return x * y;
}

console.log(multiply(3, 4)); // 12
console.log(multiply(10)); // 20
```

[Default Parameters](http://es6-features.org/#DefaultParameterValues)