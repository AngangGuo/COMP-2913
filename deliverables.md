---
layout: page
title: Deliverables
permalink: /deliverables/
---

### Project 1 - To Do App

Weight: 20%

Due Date: Beginning of Class 4

#### Requirements

1. Create a new React application, name it "todo-app".

1. This app will display a text input for the user, where they will be able to write a task.

1. A button should be displayed beside the input. When clicked, this button should add the user's input to a list of to do items.

1. Blank items should not be added to the list. This can happen if the user presses the "Add" button without writing down a task.

1. Users should be able to add items to the list by using the "Enter" key as well.

1. The list could potentially have 0 to multiple items.

1. After adding an item, the text input must be emptied automatically.

1. Each list item must display a checkbox, and the task that the user wrote.

1. When checking off the checkbox, the list item should be removed from the list.

1. Ensure that you make use of Components intelligently. Think about what should be extracted into a separate component, and do so.

##### Stretch Goals (not for marks)

If you breezed through the exercise above and would like a challenge, here are some ideas. Note that you will not get extra marks for these, they are purely for learning purposes only.

1. Display a timestamp for each added item.

1. Allow ordering the list by timestamp, ascending and descending.

1. Allow sorting items by drag and drop. (For more advanced programmers who are already comfortable with React). You may use external libraries if you wish to do so.

---

<!--

### Project 2 - Weather Application

Weight: 30%

Due Date: Beginning of Class 6 (June 26th, 2018)

#### Requirements

1. Create a new React application, name it "weather-app".

1. This app will display weather forecast information for a select few cities. Note that you should display the forecast for the next few days, not just the current day.

1. Create a dropdown select input with at least 5 different cities. When selecting one of the cities from the dropdown, the view should display the weather information for that specific city.

1. You will need to make http requests to fetch for data. Documentation is here: [YAHOO! Weather API](https://developer.yahoo.com/weather/)

1. If you make the API request below, you will get data for the weather forecast for Vancouver, for the next few days. Display the forecast, with weather information, temperature, etc.

1. Users of your application should be able to use the dropdown to select different cities, and see weather for them.

1. Make good use of Component composition. Break parts of your application into sub-components, as you see fit.

1. Display images for each weather type. A rainy day should display a rainy icon.

1. The http request above returns data in American measurements. Since we're in Canada, ensure that the data displayed uses the metric system/Celsius. There are a number of ways to do this. It's up to you to figure out.

1. To facilitate your lives, I'll give you the specific endpoint that you need to make requests to.

```
# Note that there are invalid characters for an url on the API endpoint below.
# If you make a http request with these characters, the request utility will encode
# these characters automatically for you!
GET https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="vancouver, bc")
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

In [D2L](http://learn.bcit.ca), look for the React course, and select Dropbox. There should be folders for each project.
Ensure that you **do not include** the node_modules folder in your project when submitting.
Zip your React app folder and name it {projectNumber}_{firstName}_{lastName}.
Eg. project1_daniel_takeuchi.zip

---
