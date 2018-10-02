---
layout: post
title:  "Class 4: Component Children"
date:   2018-10-02 10:00:00 +0700
---

#### Component Children

Sometimes, you may want to allow nesting elements and other components under your custom component.

{% highlight react %}
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <MyButton>
          <img src="search.png" />
          Search
        </MyButton>
      </div>
    );
  }
}

export default App;
{% endhighlight %}

Note that the component `MyButton` above has elements in-between it's opening and closing tags.
In order to use these in your `MyButton` component, you can do the following:

{% highlight react %}
import React, { Component } from 'react';

class MyButton extends Component {
  render() {
    return (
      <button>
        {this.props.children}
      </button>
    );
  }
}

export default MyButton;
{% endhighlight %}

`props.children` is a special prop that refers to the elements in between the opening and closing tags of the the component instance.

---
