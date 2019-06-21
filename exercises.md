---
layout: page
title: Exercises
permalink: /exercises/
---

Here are some extra practice React exercises you can try out. More will be added in the future!

<!-- #### Panel Component -->

<!-- #### Typeahead Input -->

#### Slot Machine

##### React concepts needed:

- Component Lifecycle 

- Component Props

- Component State

- Event handlers

##### Instructions

1. Create a new React application called "slot-machine"

1. On the initial View, the user should see 3 images lined up horizontally (Like a slot machine).

1. The images on the slot should be random, out of a batch of 5 images of your choice.

1. The user should also see the amount of fake money they have. Set this initial amount to $25.

1. Display a button labeled "Pull".

1. When clicking on the "Pull" button, the user's money should decrease by $1.

1. After a pull, refresh 3 random images on the slots.

1. If they don't match, do nothing.

1. If 2 images are the same, award the user $2.

1. If 3 images match, award the user $5.

---

#### Dog Breeds

##### React concepts needed:

- Component Lifecycle 

- Component Props

- Component State

- Event handlers

- Asynchronous requests

- React Router

##### Instructions

1. Create a new React application called "dog-breeds"

1. Use React Router to take advantage of links that do not require full page loads.

1. Create a route for the path "/dogs/:breed", where :breed could be any string

1. In the Dog View, fetch for dog images using the Dog API:
```
https://dog.ceo/api/breed/hound/images
```

1. Display up to 20 images for a given breed, depending on the current url. "/dogs/chihuahua" should display images of Chihuahuas.

1. Display React Router links for 5 different dog breeds. These links should be visible on the home page, and on the dog page.

1. If a url supplied does not contain images, display a proper message.

---

#### Employee Manager

##### React concepts needed:

- Component Props

- Component State

- Event Handllers

- Controlled Forms

##### Instructions

1. Create a new React application called "employee-manager"

1. Display a form for adding new employees.

1. This form should include fields for "first name", "last name" and "date of birth".

1. This form should also include a dropdown for "user type". This dropdown should include options for "manager", "contractor" and an empty option as default.

1. If the dropdown value is set to "manager", display a new field on the form for "Team Name".

1. If the dropdown value is set to "contractor", display a new field on the form for "Contract End Date".

1. If the dropdown value is empty, do not display any extra fields.

1. Once the user submits the form, add the employee to the list below the form. (List starts empty).

1. Each Employee List Item must display all the information available for each employee.

1. For Managers and contractors, also display a tag, or something of the sort to be able to differ employee types.

1. Display a delete button for each employee.

1. Clicking on the delete button removes the employee from the list.

1. Add controls for sorting the list of employees by first and last names.

---
