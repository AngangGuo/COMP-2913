---
id: "create-react-app"
title: "Create React App"
---

Currently, the easiest way to get started with React is with ["Create React App"](https://github.com/facebookincubator/create-react-app), a project maintained by Facebook. Create React App allows us to scaffold a new React project, with basic configuration and tooling all setup from the get-go.

```
my-app

├── README.md

├── node_modules

├── package.json

├── .gitignore

├── public

│   └── favicon.ico

│   └── index.html

│   └── manifest.json

└── src

```

#### Project Structure

- **Readme.md** - This file is my-app's readme text file. The ".md" stands for markdown.

- **node_modules** - This directory contains the code for the package dependencies for your project. You will never need to edit the files in this directory manually.

- **package.json** - This file contains relevant project metadata and list of package dependencies and their accepted versions. These dependencies get installed into the node_modules directory. If you add a new dependency, the added package will be added to node_modules. If you remove a dependency, it will be removed from node_modules. Read more at [npm](https://www.npmjs.com/).

- **.gitignore** - List of files and directories to be ignored by [git](https://git-scm.com/). Git is a widely used version control system, used for small and large projects. [Github](https://github.com/), a software development platform, is built around git.

- **public** - Files that will be made available at the root of your client side React project. Mainly used for static assets, like images, and the base index.html file. You will rarely need to use this folder, as the index.html will be automatically updated for you as you work on your project.

- **src** - Contains all code related files in your project, including JavaScript and CSS files. The entry point for your JavaScript code is **src/index.js**, which is where my-app's React will kick in.

---