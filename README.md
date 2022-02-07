![](/ga_cog.png)

# Git Pub

![](https://imgur.com/MfZn3wW.png)

Make a pub app that displays data inside server-side rendered views.

**Learning Objectives**

- Practicing index and show routes with express

**Prerequisites**

- JavaScript
- Express
- Node
- liquid

---

## The App (User Stories)

- When a user goes to the `/drinks` route, they should see an `index` of all the drinks available at the pub
  - **Index**: The name of each drink should be rendered to the page, each name should be clickable
- When a user clicks on the name of one of the drinks, they should be taken to that drink's `show` page
  - **Show**: The name, image, and price of each drink should be rendered to the page

## Getting Started

### Setting up the file structure

**In terminal, inside your homework folder**:

- fork and clone this repository into your `deliverables` folder
- cd into this repo
- `mkdir gitpub`
- `cd gitpub`
- `mkdir views`
- `touch views/index.liquid views/show.liquid`
- `mkdir models`
- `touch models/drinks.js`
- `touch server.js`
- `touch .gitignore`
- `npm init`
  - follow the `npm init` prompts
  - _thought question:_ does npm init create a file? if it does, where does it create it and what is the name of the file?
- `code .`
- add `node_modules` to `.gitignore`

**Make sure you did it right**:

<details><summary>Approximate File Structure</summary><p>

![](https://imgur.com/9YUYTpl.png)

**Note**:This image is a rough outline for you to double check which main folders should be nested or on the same level.

If you just have one file, it could be argued that you don't need a folder for it. But as your apps grow, you'll need to get more organized and definitely use folders. Be consistent and adjust your routing as needed.

</p></details>
<br/>

**In terminal, install the necessary NPM packages**

Remember, make sure you're in the same directory for the app you want to install the packages for!

- `npm i express liquid liquid-express-views`
- <details><summary>check your package.json in VSCode to make sure they installed</summary><p>

  ![](https://i.imgur.com/Kcz3uq5.png)

  </p></details>

> 🔴 _Don't forget to commit!_

---

### Setting up your server

**In `server.js`**

- require express
- create the app object with liquid templating `const app = require("liquid-express-views")(express())`
- set a variable of `port` to `3000`
- set your app to `listen` to the port and include a `console.log()`, so that you can tell when your server is running
- include a get route / that will `res.send('Welcome to the Gitpub App!');` so that when you got to `localhost:3000`, you will see `Welcome to the Gitpub App!`

**In terminal**

- `nodemon` or `nodemon server.js` (if you set your up your `package.json` correctly to start `server.js` you don't need to put it after nodemon)
- **Remember!** `nodemon` will only work if you run it from the same location as your `package.json`

**In the browser**

- go to `localhost:3000` (or whatever port you set it to)
- check that you have your `Welcome to the Gitpub App!` message displaying

> 🔴 _Don't forget to commit!_

---

### Setting up your "database"

When setting up, you created a file called `drinks.js` in your `models` folder. For now, this will act as our "database".

**Inside `drinks.js`, paste the following data _as is_**

> You may notice that the image url's are missing a certain something, but this is _intentional!_ Do **not** directly edit any of the provided data inside your `drinks.js` file. We'll fix things programmatically!

```js
const drinks = [
  {
    name: "cruddy mary",
    price: 132,
    image: "https://imgur.com/Va5iIw5",
  },
  {
    name: "index on the beach",
    price: 68,
    image: "https://imgur.com/XV2aPa2",
  },
  {
    name: "hack & coke",
    price: 1,
    image: "https://imgur.com/rLOXFRI",
  },
  {
    name: "whiskey-value pair",
    price: 11,
    image: "https://imgur.com/a7rmkoS",
  },
  {
    name: "404 horsemen",
    price: 202,
    image: "https://imgur.com/FLucOLr",
  },
  {
    name: "if stateMint julep",
    price: 2,
    image: "https://imgur.com/yaoK0Dg",
  },
  {
    name: "APIPA",
    price: 43,
    image: "https://imgur.com/qAhA7pi",
  },
  {
    name: "node to joy",
    price: 56,
    image: "https://imgur.com/MbVdwZz",
  },
];
```

- Set up your 'database' so that it can be exported to your `server.js` and then be required by your `server.js`
- Set this 'database' to a variable called drinks in your `server.js` file
- Create a get route `/drinks` that will `res.send(drinks)`, which will display your drinks data as json in the browser

> 🔴 _Don't forget to commit!_

---

### Setting up your index view

- Instead of displaying json at your /drinks route, you should serve the `index.liquid` file you created that will display your drinks

**In `index.liquid`**

- Start with your HTML boilerplate
- Add an `<h1>` that describes the page, i.e. `Welcome to gitPub`
- Add a `<style>` tag so you can write some CSS _directly_ inside your `html` file.
  - See more info [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
  - Wondering how you can connect a separate `.css` file? We'll learn about it later, or you can look at the Hungry for More section that will point you in the right direction to research!
- Add a `background-color` and text `color` to to `body` so that you can ensure your css is working correctly

  - <details><summary>For example:</summary><p>

    ```
    <style type="text/css">
      body {
        color: blanchedalmond;
        background-color: steelblue;
      }
    </style>
    ```

  </p></details>

- Change your `/drinks` route to `res.render` your `index.liquid`
- In your browser, go to `localhost:3000/drinks` to make sure you're rendering the `index.liquid` file!

> 🔴 _Don't forget to commit!_

---

### Setting up your index view to show your drinks data

**In your `index.liquid`, make it so that you can see:\***

- The name of each drink as a list item inside an unordered list
- This list should be dynamically rendered by liquid based on your data from your 'database'
- You'll notice the drink names aren't properly capitalized! Let's fix that! Manipulate the data programatically to capitalize the first letter of their names

> 🔴 _Don't forget to commit!_

---

### Setting up your show route

**In `server.js`**

- Add a new get route for `/drinks/:id`
- For now, just make sure it works correctly by havine the route `res.send(req.params.id)`
  - So that when you go to `localhost:3000/drinks/whatever`, `whatever` should show up in the browser

> 🔴 _Don't forget to commit!_

---

### Linking `index.liquid` to `show.liquid`

**In `index.liquid`**

- Make each listed drink a link that will go to the route `/drinks/x`, where 'x' is the array position of the drink in the data array. This should be set dynamically with liquid!
- When you click the link, it show go to the show route and the index number corresponding to the drink's array position should be displayed

> 🔴 _Don't forget to commit!_

---

### Rendering an individual drink in the show view

**In `show.liquid`**

- Copy/paste your code from your `index.liquid` into your `show.liquid`
  - surely, there must be a better way to not copy/paste; are you wondering if there is something in the hungry for more section about this?
- Change all your html code inside your `show.liquid` file's `<body>` so that:
  - Your `h1` tag says "At foo bar"
  - There's an `h2` tag that should display the name of the drink
  - There's an image tag that should display the image of the drink
  - There's an `h3` tag that should display the price of the drink
  - Add an anchor tag with the text of back, that will take you back to your index.liquid view

**In `server.js`**

- Update the get route to render the `show` view with the drinks data

Oh no! If you check on the browser, the image is broken because in our database the image links don't have the `.png` ending, let's fix that programatically!

- Without going back to `the drinks.js` database file and editing it there, add on `.png` to the end of the drink's image data programatically
  - _Thought question:_ Where should you do this? server.js or show.liquid? Or does it not matter, i.e. will either one work?

> 🔴 _Don't forget to commit!_

---

### Style your app

- Add a little more flair to your gitPub app by styling it with a little bit of CSS. Doesn't have to be anything crazy, just make it so that it's not the default styling!

> 🔴 _Don't forget to commit!_

---

### Hungry for More?

Our gitPub is missing some food, so let's add some!

1. Add a second 'database' by creating a `food.js` file in the `models` folder and use the following data:

```js
const food = [
  {
    name: "(req, rEscargot)",
    price: 12,
    image: "https://imgur.com/BRgv2rz",
  },
  {
    name: "Nulltimate Nachos",
    price: 10,
    image: "https://imgur.com/vKRbSHN",
  },
  {
    name: "split() pea soup",
    price: 1,
    image: "https://imgur.com/qd9jheG",
  },
  {
    name: "CURLy Fries",
    price: 11,
    image: "https://imgur.com/lEQ1AdY",
  },
  {
    name: "Garlic NaN",
    price: 202,
    image: "https://imgur.com/UEx7cYk",
  },
  {
    name: "Baby Got BackEnd Ribs",
    price: 2,
    image: "https://imgur.com/XbRMQ3g",
  },
  {
    name: "Git Pull Pork Sandwich",
    price: 43,
    image: "https://imgur.com/QZW3gJg",
  },
];
```

1. List the food under your drinks list on the index
1. Make them clickable as well to go to their show page

### Even Hungrier for More?

1. Look into liquid layouts and try to implement them in your app! Create a partial for the head, and include it in both your views. [Liquid Documentation](https://liquidjs.com/tags/layout.html)
  - if you want to use layouts make sure your using liquid-express-views version 1.0.7
  - use the following code to configure liquidjs
```js
// path library
const path = require("path")
// create our application object (and configure liquid templating)
// passing the app object to the l-e-v function first and then saving to the app variable
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})
```
1. Style your application with Bootstrap or any other CSS framework! Or really jazz up your app by adding some hand-rolled flourishes with css animations, jQuery and more!
1. Sign up for [Code Wars](https://www.codewars.com/) and try out a challenge (or a few!) in order to keep honing your JavaScript skills!
1. Learn about express static in order to learn how to link a css file to your app (we'll be covering it tomorrow, but if you're interested in looking into it now: [read those docs!](https://expressjs.com/en/starter/static-files.html)) Go ahead and dive right in!

---

## Deliverables

An express app that meets all the user stories outlined in the beginning of this markdown.

## Technical Requirements

1. Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

## Etc.

- Credits to some of the drink information goes to: David Rada, Sebastian D'Arena and Jon Weinstein of SEIR-Cerf

---

_Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
