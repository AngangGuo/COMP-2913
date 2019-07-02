---
id: "es6-string-interpolation"
title: "String Interpolation"
---

Allows creating strings with embedded variables more easily.

ES6
```js
const searchTerm = 'javascript';
const locale = 'en_CA';
const url = `https://google.ca?search="${searchTerm}"&locale=${locale}`;
```

ES5
```js
var searchTerm = 'javascript';
var locale = 'en_CA';
var url = 'https://google.ca?search="' + searchTerm + '"&locale=' + locale;
```

[String Interpolation](http://es6-features.org/#StringInterpolation)