---
id: "es6-block-scope-vars"
title: "Block Scoped Variables"
---

Variables created with *let* and *const* are block scoped.
Variables created with *var* are function scoped.

Function Scope:
```js
function logNumbers() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

logNumbers();
console.log(i); // Variable not defined - out of scope
```

Block Scope:
```js
function logNumbers() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // Variable not defined - out of scope
}

logNumbers();
console.log(i); // Variable not defined - out of scope
```

[Block Scope Variables](http://es6-features.org/#BlockScopedVariables)