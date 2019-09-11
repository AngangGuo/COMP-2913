---
id: "react-components"
title: "React Components"
---

#### Your first React component

All of your JavaScript code should live inside of the src/ directory. You may add sub-directories for organization purposes. This is recommended. Let's try creating a component called "Profile".

- First, create a new file called Profile.js, under src/components/.
- In your new blank file, type the following out (don't copy and paste. Typing it out will help you remember the React Component structure better.)

```js
import React from 'react';

function Profile() {
  return (
    <div>
      <img src="some/image/url" />
      <span>My Name</span>
    </div>
  );
}

export default Profile;
```

Will creating the component above render it on your html page? Go and take a look.

You will soon notice that just creating the component above will not affect your html page at all. Where would it get displayed?
Open your App.js file and let's display your new Component. We will do this together in class.
Essentially, you will need to render your new component inside of the App component!

---

#### Props

Now let's say we would like to display a Profile for your instructor. Would you need to create an entirely new component for that? That doesn't sound very scaleable! What if you were Facebook, and had to display a list of all your friends? You don't want to have a separate file for each person in the World. What you need is a template, into which you can specify variables, like name and image link.
This is where "props" come in. By specifying props, you can pass in different values into your Profile component. Example:

```js
import React from 'react';

function Profile(props) {
  return (
    <div>
      <img src={props.imageUrl} />
      <span>{props.name}</span>
    </div>
  );
}

export default Profile;
```

and to use your component with different props:

```js
<Profile name="Your Name" imageUrl="your image url" />
<Profile name="Daniel Takeuchi" imageUrl="some other url" />
```

See more at: [https://reactjs.org/docs/components-and-props.html](https://reactjs.org/docs/components-and-props.html)
