---
id: "component-children"
title: "Component Children"
---

#### Component Children

Sometimes, you may want to allow nesting elements and other components under your custom component.

```js
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
```

Note that the component `MyButton` above has elements in-between it's opening and closing tags.
In order to use these in your `MyButton` component, you can do the following:

```js
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
```

`props.children` is a special prop that refers to the elements in between the opening and closing tags of the the component instance.

---
