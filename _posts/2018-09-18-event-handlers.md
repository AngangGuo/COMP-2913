---
layout: post
title:  "Event Handlers"
date:   2018-09-18 12:30:00 +0700
categories: [react]
---

#### React Event Handling

The same events that you can use on the DOM are also available on React elements.
There are a few syntax differences:

- React events are named using camelCase, rather than lowercase.

- With JSX you pass a function as the event handler, rather than a string.

- Cannot return false on event handlers to prevent the default behaviour. The alternative is to use `preventDefault()`.

---

#### List of available events

The list is fairly extensive. Take a quick look at the list of DOM events: [DOM Object Event](https://www.w3schools.com/jsref/dom_obj_event.asp). You do not need to know them all, as many are rarely used. On the other hand, some are very extensively. Here is the minimum list of events that you should be aware of:

- onClick

- onMouseEnter

- onMouseLeave

- onKeyDown

- onKeyUp

- onFocus

- onBlur

- onChange

- onSubmit

---

#### Implementing Event Handlers

We will follow the example here:
[React - Handling Events](https://reactjs.org/docs/handling-events.html)

---

#### Exercises

##### Exercise 1 - Stop Watch

1. Create a new React application, name it "stop-watch".

1. Create a component called "StopWatch" and render it inside of your top level "App" component.

1. Your Stop Watch should render a timer that starts automatically when the View loads.

1. The timer should be in the format "mm:ss". Eg. 01:15 (1 minute and 15 seconds). Do not worry about times over 1 hour.

1. The timer should update the view every second.

1. Display a button labeled "Pause". This button pauses the timer.

1. When paused, button should display "Start". Clicking on it restarts the timer.

1. Display a button labeled "Reset". This button resets the timer to 0 and stops the timer.

1. When the timer is 0, the "Pause" button should be re-labeled as "Start".

1. When the timer is 0 and the timer is not running, the Reset button should be disabled. Ensure that the button is also visibly disabled.

1. Make sure to test it, to avoid bugs. What happens if the Start button is clicked multiple times? How about if the Stop button is clicked multiple times?

---

##### Exercise 2 - Rock Paper Scissors

1. Display 3 images, for "Rock", "Paper" and "Scissors".

1. Display a score board. Player and Computer start at 0.

1. Display a button to reset the game. This should set both players to score 0.

1. When clicking on the one of the images, your application should pick one of the 3 choices as well, at random.

1. Increment the score by 1 to the winner. Either use an alert or display a message about who won.

1. Once one of the players reaches 5 points, display a message about who won.

We will go over this exercise on Class 3, and we will discuss good strategies in composing Components, good React practices, proper use of props, state and event handlers.

---
