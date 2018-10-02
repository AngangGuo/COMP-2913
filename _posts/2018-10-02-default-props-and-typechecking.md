---
layout: post
title:  "Class 4: Default Props and type-checking"
date:   2018-10-02 11:00:00 +0700
---

#### Default Props

For React components that you create, you may have default values for some specific props for that component.

{% highlight react %}
import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imageUrl} />
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

Profile.defaultProps = {
  imageUrl: 'http://images.com/profile-avatar.png'
};

export default Profile;
{% endhighlight %}

If you create an instance of the Component above, without specifying the image url for the profile, it will use the fallback image specified instead. Not all props need a default value, although it's good practice to specify default values for props that aren't required.

See more about [Default Props](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values) here.

---

#### Type-checking Props

For large applications with hundreds to thousands of custom Components, type-checking props can help prevent a lot of bugs. To do so, you'll need the [prop-types](https://github.com/facebook/prop-types) library, which used to be part of the core React library, but is now separated into it's own module. The create-react-app tool we use already has prop-types as a dependency, so you do not need to install the npm package manually.

Here's a simple example:

{% highlight react %}
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imageUrl} />
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  imageUrl: PropTypes.string
};

Profile.defaultProps = {
  age: null,
  imageUrl: 'http://images.com/profile-avatar.png'
};

export default Profile;
{% endhighlight %}

Read more about [Type-checking with React](https://reactjs.org/docs/typechecking-with-proptypes.html) here.

---
