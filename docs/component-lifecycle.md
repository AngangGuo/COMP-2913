---
id: "component-lifecycle"
title: "Component Lifecycle"
---

#### What is it?

According to the official documentation: [React Component - Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

> Each component has several “lifecycle methods” that you can override to run code at particular times in the process. Methods prefixed with "will" are called right before something happens, and methods prefixed with "did" are called right after something happens.

---

#### Available Lifecycle Methods

- DEPRECATED - [componentWillMount()](https://reactjs.org/docs/react-component.html#componentwillmount)

- [componentWillUnmount()](https://reactjs.org/docs/react-component.html#componentwillunmount)

- [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)

- DEPRECATED - [componentWillReceiveProps()](https://reactjs.org/docs/react-component.html#componentwillreceiveprops)

- DEPRECATED - [componentWillUpdate()](https://reactjs.org/docs/react-component.html#componentwillupdate)

- [componentDidUpdate()](https://reactjs.org/docs/react-component.html#componentdidupdate)

- [componentDidCatch()](https://reactjs.org/docs/react-component.html#componentdidcatch)

- [shouldComponentUpdate()](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)

- [getDerivedStateFromProps()](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#new-lifecycle-getderivedstatefromprops)

- [getSnapshotBeforeUpdate()](https://reactjs.org/blog/2018/03/27/
update-on-async-rendering.html#new-lifecycle-getsnapshotbeforeupdate)

- [getDerivedStateFromError()](https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror)

Note that it is important to be aware of all of the lifecycle methods, but we will see limited use in class. Some of the methods above are used for more complex software/business requirements, and some are often used for improving an application's performance. Please read through the documentation above. I will also add my own comments on them below, from my experience using React over the past few years.

---

#### Instructor's Comments

Note that the comments below are based on the instructor's opinions and experiences, and may not be the only use cases for the lifecycle method above.

- componentDidMount() - This one is very useful, specifically if you need access to the rendered components as soon as possible. Reasons for this include needing to attach an event listener to an element. Another good usage for this function is to run "initialization" code, like fetching for data required by the component.

- componentDidUpdate() - It's a good place to manually access the DOM. Also useful for running logic based on props/state changes. Eg. If prop `userId` changes, fetch for data for this new `userId`.

- componentDidCatch() - This is a new lifecycle method. Perfect for displaying a fallback UI or sending crash errors to a remote service.

- shouldComponentUpdate() - Mostly used for manual performance improvements, although it should be avoided when possible. Usage of this could potentially mean that you are trying to patch a badly architectured application.

- getDerivedStateFromProps() - This lifecycle method is invoked after a component is instantiated as well as when it receives new props. It should be able to cover use cases for the deprecated `componentWillReceiveProps()` function. It should only be used when state needs to change based on changes in props.
[You Probably Don't Need Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)

- getSnapshotBeforeUpdate() - This lifecycle method is called right before mutations are made (before DOM is updated). This method is often unneeded, but should be able to cover use cases for the deprecated `componentWillUpdate()`. A usage example includes capturing scroll position before it is potentially changed.

---

#### Implementing Lifecycle Example

See the Official Documentation for a good example: [React Component Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

---
