---
id: "function-components"
title: "Function vs Class Components"
---

For components that do not need lifecycle methods or state, you can optionally write these components in a more simplified way. 

Class implementation:

```js
import React, { Component } from 'react';

class ShoppingListItem extends Component {
    render() {
        return (
            <li>
                <h2>{this.props.name}<h2>
                <p>{this.props.description}</p>
                <p>Quantity: {this.props.quantity}</p>
            </li>
        );
    }
}

export default ShoppingListItem;
```

---

Function implementation:

```js
import React from 'react';

function ShoppingListItem(props) {
    return (
        <li>
            <h2>{props.name}<h2>
            <p>{props.description}</p>
            <p>Quantity: {props.quantity}</p>
        </li>
    );
}

export default ShoppingListItem;
```
