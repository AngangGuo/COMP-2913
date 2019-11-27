---
id: "object-immutability"
title: "Object Immutability"
---

#### What is Immutability?

In programming, immutability means that a given data is "unchangeable" and cannot have it's state modified after being created.
In JavaScript, all primitive data types are immutable.

Example:

```js
let a = 'test';
let b = a;
a = a.toUpperCase();

console.log(a) // TEST
console.log(b) // test
console.log(a === b) // false
```

JavaScript Objects are mutable though. Meaning that they can change value once they are allocated space in memory.

```js
let carA = { model: 'Civic' };
let carB = carA;

a.model = 'Corolla';

console.log(carB.model); // Corolla
console.log(carA === carB) // true
```

Arrays in JavaScript are actually Object types as well, thus mutable.

```js
let a = ['apple', 'banana'];
let b = a;

a.push('cherry');

console.log(b); // ['apple', 'banana', 'cherry'];
console.log(a === b) // true
```

---

#### How does this affect us, developers?

Consider the code below.

```js
let age = 21;
let person = { name: 'John' };

someFunction(age);
someFunction(person);

console.log(age);
console.log(person);
```

What will be outputted to the console on the code above?
the number 21 will always be outputted.
As for person, this value could very well be mutated inside of "someFunction", and we cannot
determine the value just from the code above.

As you can imagine, this could cause a lot of confusion for programmers. Some architectural patterns even frown upon mutable objects, Redux being one of them.

---

#### How does this relate to React?

- Renders to the page where elements are added, updated and deleted are based on data changes.
Performance improvements can be made if components do not need to re-render, when the data has remained the same.

- Mutating state can lead to bugs if the original data was not supposed to change after setState is called.

---

#### Examples of functions that mutate Objects:

- Array.prototype.push
- Array.prototype.reverse
- Array.prototype.shift
- Array.prototype.sort
- Array.prototype.splice
- someObject[someProp] = newValue


#### Examples of functions that don't mutate Objects:

- Array.prototype.concat
- Array.prototype.filter
- Array.prototype.slice
- Array.prototype.map
- Object.assign({}, { [someProp]: someValue })
