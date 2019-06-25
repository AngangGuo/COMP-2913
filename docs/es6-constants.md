---
id: "es6-constants"
title: "Constants"
---

Variables that cannot be **re-assigned** a new value, after they're created.

```js
var colorA = 'red';
const colorB = 'red';

colorA = 'blue'; // new value of colorA is "blue"
colorB = 'blue'; // Error
```

Note that only **re-assignments** are not allowed. The variable itself may change in **value**.

```js
const car = { color: 'red' };
car.color = 'blue'; // This is ok

console.log(car); // { color: 'blue' }

car = { color: 'green' }; // Error
```

[Constants](http://es6-features.org/#Constants)