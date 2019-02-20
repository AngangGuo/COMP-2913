---
layout: post
title:  "Class 5: Function components"
date:   2019-03-18 00:10:00 +0700
categories: [javascript]
---

For components that do not need lifecycle methods or state, you can optionally write these components in a more simplified way. 

Class implementation:

{% highlight react %}
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
{% endhighlight %}

---

Function implementation:

{% highlight react %}
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
{% endhighlight %}

---
