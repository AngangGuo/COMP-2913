---
id: "lists"
title: "Lists"
---

There will be times when you'd want to render a list of elements, that could potentially have 0 to a variable number of items. Would you need to copy/paste a component for each of these items?

Examples of when you'd want to render a list:

- Displaying a list of your Social Network connections.

- Displaying a list of online activity by your friends.

- Displaying a dynamic dropdown, which options could vary in value and length.

Please see [React - Lists and Keys](https://reactjs.org/docs/lists-and-keys.html) for up to date examples.

---

#### Exercise:

- Use the data below to display a list of cars for sale.

- Create a Component for "CarListItem". It must accept props for it's data.

- Render each item in the list. Do not forget to set a "key" on each item.

```js
[
  {
    brand: 'Toyota',
    make: 'Corolla',
    year: 2015,
    imageUrl: 'http://s3.caradvice.com.au/thumb/1000/562/wp-content/uploads/2015/06/2015-toyota-corolla-zr-4.jpg',
    price: 19200,
    new: false
  },
  {
    brand: 'Honda',
    make: 'Civic',
    year: 2016,
    imageUrl: 'https://cars.usnews.com/static/images/Auto/izmo/i2314304/2016_honda_civic_angularrear.jpg',
    price: 21600,
    new: false
  },
  {
    brand: 'Ford',
    make: 'Mustang',
    year: 2008,
    imageUrl: 'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/CAB80FOC051B0101.jpg',
    price: 13600,
    new: false
  },
  {
    brand: 'Mercedes Benz',
    make: 'C-Class C43',
    year: 2017,
    imageUrl: 'https://61571e67bd8f1f6acb1a-642f5177af5aebf9ccc5072ad2e9ac32.ssl.cf1.rackcdn.com/WDDWJ6EB0HF469169/b101c9f787e7c70c0803a02b2210783a.jpg',
    price: 68000,
    new: true
  },
  {
    brand: 'Tesla',
    make: 'Model X',
    year: 2017,
    imageUrl: 'https://cnet4.cbsistatic.com/img/3-14WgVgrMGZ_pKcAqsefdLScJc=/830x467/2016/04/28/5a91e8fc-14bc-4c22-abe4-b990073328d2/2016-tesla-model-s-19-of-43.jpg',
    price: 130000,
    new: true
  }
]
```
