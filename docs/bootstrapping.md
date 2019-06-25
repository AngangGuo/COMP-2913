---
id: "bootstrapping"
title: "Bootstrapping"
---

#### Initial Project

If you have used [Create React App](https://github.com/facebookincubator/create-react-app) to scaffold your first React Application, you should be able to use `npm start` on your terminal to start your application server. Once the server is running locally, you should be able to see it on your browser by going to localhost:3000.

- Use your editor of choice to open your newly created project.
- See src/App.js.
- Find the h1 tag in App.js, and change it's text node, from "Welcome to React", with your name.
- Save the file and see your page on your browser.

Did the changes get reflected on the page?

The App.js file that you modified is a React Component. React components get rendered into your html document. Basically, the React rendering engine looks at your JavaScript, then translates them into html, which browsers can in turn, display properly.

How does React know where to render your application in the html?

Look at public/index.html. If you are familiar with Web Development, you will know that this is usually the entry point for a website. Look for the html line below:

```html
<div id="root"></div>
```

Now look at src/index.js. In this project, this file is the entry point for your JavaScript application.

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

Are you starting to see the connection? The JavaScript is rendering your "App" component, into the html element with id "root". Very rarely you will need to modify this public/index.html and src/index.js files. Just keep in mind that there's no magic going on here. At it's most basic form, React is adding html code into your index.html file, by looking at your App component. That's it!

Also see [https://reactjs.org/docs/hello-world.html](https://reactjs.org/docs/hello-world.html) in the official React documentation.