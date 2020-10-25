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

- DEPRECATED - [componentWillReceiveProps()](https://reactjs.org/docs/react-component.html#componentwillreceiveprops)

- DEPRECATED - [componentWillUpdate()](https://reactjs.org/docs/react-component.html#componentwillupdate)

- [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)
  Invoked when a component renders for the first time on the page. Great place to run initialization code or make network requests for data.

- [componentWillUnmount()](https://reactjs.org/docs/react-component.html#componentwillunmount)
  Invoked when a component is about to be removed from the view. Ideal for invalidating timers and canceling pending requests.

- [componentDidUpdate()](https://reactjs.org/docs/react-component.html#componentdidupdate)
  Invoked right after a render is triggert after an update occurs. Good place to run tasks based on prop changes, as long as setState is not called without a wrapping condition.

- [componentDidCatch()](https://reactjs.org/docs/react-component.html#componentdidcatch)

  Invoked after an error has been thrown by a nested component. Ideal for logging errors.

- [shouldComponentUpdate()](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)

  Exists for performance optimization, but can be **VERY** dangerous to use, as it can lead to ambiguous bugs that are hard to track. Avoid as much as possible.

- [getDerivedStateFromProps()](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#new-lifecycle-getderivedstatefromprops)

  Invoked before render is called. Avoid using this method, as it's use cases are rare, usually where the state of the component depends on changes in props over time.

- [getSnapshotBeforeUpdate()](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#new-lifecycle-getsnapshotbeforeupdate)

  Invoked right before the most recent render output is commited to the DOM. Use cases are also rare, avoid when possible. Ideal for capturing visual information, like scroll position and element dimensions.

- [getDerivedStateFromError()](https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror)

  Invoked after an error has been thrown. Ideal for recovering for unexpected errors.

**Note that it is important to be aware of all of the lifecycle methods, but in most cases, these are the ones that will be used the most:**

- componentDidMount

- componentWillUnmount

- componentDidUpdate

**And these you should avoid when possible (even the official React documentation advises so). In most cases, there are alternative ways to handle with the the lifecycle events above, as well as the component's constructor.**

- shouldComponentUpdate

- getDerivedStateFromProps

- getSnapshotBeforeUpdate



---
