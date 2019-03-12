---
layout: page
title: Deliverables
permalink: /deliverables/
---

### Project 1 - Shopping List App

Weight: 20%

Due Date: Beginning of Class 4

#### Requirements

1. Create a new React application, name it "shopping-list".

1. This app will display a text input for the user, where they will be able to write a shopping item. Eg. "a dozen eggs", "detergent".

1. A button labeled "Add to Shopping list" should be displayed beside the input. When clicked, this button should add the user's input to a list of shopping items.

1. Blank items should not be added to the list. This can happen if the user presses the add button without writing down a task.

1. Users should be able to add items to the list by using the "Enter" key as well.

1. The list could potentially have 0 to multiple items.

1. After adding an item, the text input must be emptied automatically.

1. Each list item must display the shopping item name and a button labeled "delete".

1. When clicking on the delete button, the list item should be removed from the list.

1. Ensure that you make use of Components intelligently. Think about what should be extracted into a separate component, and do so.

##### Stretch Goals (not for marks)

If you breezed through the exercise above and would like a challenge, here are some ideas. Note that you will not get extra marks for these, they are purely for learning purposes only.

1. Display a timestamp for each added item.

1. Allow ordering the list by timestamp, ascending and descending.

1. Allow sorting items by drag and drop. (For more advanced programmers who are already comfortable with React). You may use external libraries if you wish to do so.

---

### Project 2

Weight: 20%

Due Date: Beginning of Class 6

Due to the Yahoo Weather Forecast API being deprecated, you have the option to try this project instead.

#### Requirements

1. Create a new React application, name it "books-app".

1. This app will display a list of books, based on what users search for.

1. Display a text input, pre-populated with a value, like "harry potter".

1. When the app loads, it will automatically fetch for a list of books based on the value inside of the text input.

1. The list of books should display the name of the book and a description for each item. Also make sure to display it's categories. If available, display the thumbnail of the book as well.

1. Clicking on the title of the book should take you to the external book page.

1. Allow users to search for different books. Feel free to add a "submit" button.

1. Once users try to search for new books, reload the items of the page with items that match the current search term.

1. If no results are found, display a proper message: "no books found for '12345678987654326765'".

1. While the book list loads, display a loading message or spinner.

```
# Here's an example request for books with the term "harry potter"
GET https://www.googleapis.com/books/v1/volumes?q=harry potter
```

---

<!--

### Final Project - Your ReactJS Portfolio

Weight: 30%

Due Date: April 10th, 6:00pm SHARP (1 week after last class) - This date is non-negotiable.
I will have the finals marked by April 17th.

#### Requirements

1. Create a new application. Name it whatever you want.

1. Display a Navigation Bar, which will have a few links to different pages. This navigation bar should be visible on any page of your application.

  1. Home - path: '/' - Will be the home of your application. Feel free to add a description of your projects and yourself.

  1. Links to at least 3 projects you've worked on in this class. Examples: rock-paper-scissors, countries list,  weather app, todo list, etc. Clicking on these links should take the user to a url path specific to that project. All these projects should be accessible through an url such as "/projects/your-project-name". Note that your projects should still work.

  1. Namespace your components for the projects above. Meaning that, under the components directory in your project codebase, create sub-directories. Examples:

      - src/components/countries-list/

      - src/components/rock-paper-scissors/

      - src/components/weather-app/

  1. I will not look at the code for the sub-directories, as some were already marked, and some were given solutions in class.

  1. Any invalid route should display a proper "Not Found" Page.

  1. The navigation bar should display which route is active. See the React Router docs for tips on how to do it.

1. Spend a little time to make your application presentable. This could serve as a portfolio piece! -->

---

#### Tips

1. Try to apply what you have learned in class, before turning to Google

1. If you do decide to look online for ways to solve the projects, keep in mind that some solutions may be outdated, possible making use of deprecated features.

1. Do not submit code that you do not understand.

1. Break down problems into smaller portions that you can solve.

---

#### Marking criteria

You will be marked according to the criteria below:

| Application works as requested | | 50%   |
| Clean, readable code           | | 15%   |
| Applied good structure         | | 30%   |
| Submitted project as requested | | 5%   |

---

#### Application works as requested

Does it meet all functional requirements?

---

#### Clean, readable code

Is the code clean and concise? Are the variables named appropriately? Does the code follow a standard? (eg. proper code line alignment, consistent standards). Is there commented out code that is not being used? Good code is easy to understand and is not complicated for the sake of being complex.

---

#### Applied good structure

Did you follow good coding and React practices? Did you apply concepts learned in class? Avoid copy/pasting from other websites, sometimes they use older versions of React, other libraries, etc. Feel free to read and learn from them, but only transfer to your code what you understand.

---

#### Submitted project as requested

Did you submit your files as specified and on time? Is your name on the project?

---

#### Submitting Projects/Final

In [D2L](http://learn.bcit.ca), look for the React course, and select Assignments. There should be folders for each project.
Ensure that you **do not include** the node_modules folder in your project when submitting.
Zip your React app folder and name it {projectNumber}_{firstName}_{lastName}.
Eg. project1_daniel_takeuchi.zip

---
