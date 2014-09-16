# React Kit

**author: Gregory Tandiono**

Kickstart your project with Facebook's
[React](http://facebook.github.io/react/) with pre-built components
to make your life easier!


## Intro

Before you go beyond this point, please visit
[React's](http://facebook.github.io/react/) project page and read up on
how React works, because I won't be covering the basics of the library.

Building complex UI can be quite a chore, especially if you have to
manage 30 views and manage all the different CRUD endpoints within your
robust web application. Frameworks like Angular, Backbone, Ember might
be the answer to a lot of your Client-Side needs, but sometimes they
include a lot of stuff that you may not need (and, sometimes, you shoot
yourself in the foot if you don't know what you're doing).


## Dependencies

- [Node](http://nodejs.org/): `brew doctor && brew install node`
- [React CLI](https://www.npmjs.org/package/react-tools): `npm install
    react-tools -g`
- [Bower](http://bower.io/): `npm install bower -g`
- [Grunt](http://gruntjs.com/): `npm install grunt-cli -g`


## Introducing Component

*React* Component is a wonderful thing, it is designed to be the 'V' in
MVC; however, it can be anything you want it to be. With **React Kit**,
I will show you that you can create your own controller within a
component. Enough talk, let's see some example:

First of all, let's setup the project directory
```
my-project/
|
|__index.html
|__javascripts/
   |
   |__react/
      |
      |__src/
      |  |
      |  |__app.jsx
      |
      |__build/
         |
         |__app.js
```

**We're going to let react-tools compile jsx to js (I will show you how
to use Grunt to watch for changes & compile as we go further)**

Let's setup an html file so that React will have somewhere to render
its view:

**index.html**
```html
<html>
  <head>
    <title>My Project</title>
  </head>
  <body>
    <div id='main-app'></div>

    <!-- Project Dependencies -->
    <script src="http://fb.me/react-0.11.1.js"></script>
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js"></script>

    <!-- Project-Specific Scripts-->
    <script src="javascripts/build/app.js"></script>
  </body>
</html>
```

We're going to be using [underscore.js](http://underscorejs.org/) for the
sake of maintaining sanity (and avoiding the use of for loops) :).

**/javascripts/react/src/app.jsx**
(Please Note that this is all written in JSX, which will compile to JS,
don't be frightened!)
```javascript
/** @jsx React.DOM */

var Layout = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <ul>
          <li>
            <a href="something.html">Link 1</a>
          </li>
          <li>
            <a href="something2.html">Link 2</a>
          </li>
          <li>
            <a href="something3.html">Link 3</a>
          </li>
        </ul>
      </header>
    )
  };
});

var Content = React.createClass({
  render: function() {
    return (
      <section id='main-content'>
        <h3>List of Quentin Tarantino's movies</h3>
        <ul id='list-of-directors'>
          <li>
            Pulp Fiction
          </li>
          <li>
            Reservoir Dogs
          </li>
          <li>
            Kill Bill
          </li>
          <li>
            Inglourious Basterds
          </li>
        </ul>
      </section>
    )
  }
});

React.renderComponent(
  <Layout />,
  document.getElementById('app')
);
```

Let's compile the `.jsx` files into vanilla `.js` by doing this:
1. `cd javascripts/react/`
2. `jsx -w -x jsx src build`
3. Open index.html in the browser

You should see things we declared in the .jsx file rendered into the
browser.

Ok let's say you've fetched an object that looks like this:
```json
{
  name: "Quentin Tarantino",
  occupations: ["Writer", "Director", "Actor", "Comedian"],
  movies: [
    {
      title: "Pulp Fiction",
      year: 1994,
      stars: ["Uma Thurman", "John Travolta", "Samuel L. Jackson",
      "Bruce Willis"],
      genre: ["comedy", "action", "adventure"],
      mature: true
    },
    {
      title: "Inglourious Basterds",
      year: 2009,
      stars: ["Brad Pitt", "Michael Fassbender", "Eli Roth",
      "Diane Kruger"],
      genre: ["comedy", "action", "adventure"],
      mature: true
    },
    {
      title: "Reservoir Dogs",
      year: 1992,
      stars: ["Harvey Keitel", "Tim Roth", "Michael Madsen",
      "Quentin Tarantino"],
      genre: ["comedy", "action", "adventure"],
      mature: true
    }
  ]
}
```

This is how you can use React to inject this data into the view (please
not that I'm using underscore.js for the sake of sanity):

**app.jsx**
```javascript
/** @jsx React.DOM */

var data = {
  name: "Quentin Tarantino",
  occupations: ["Writer", "Director", "Actor", "Comedian"],
  movies: [
    {
      title: "Pulp Fiction",
      year: 1994,
      stars: ["Uma Thurman", "John Travolta", "Samuel L. Jackson",
      "Bruce Willis"],
      genre: ["comedy", "action", "adventure"],
      mature: true
    },
    {
      title: "Inglourious Basterds",
      year: 2009,
      stars: ["Brad Pitt", "Michael Fassbender", "Eli Roth",
      "Diane Kruger"],
      genre: ["comedy", "action", "adventure"],
      mature: true
    },
    {
      title: "Reservoir Dogs",
      year: 1992,
      stars: ["Harvey Keitel", "Tim Roth", "Michael Madsen",
      "Quentin Tarantino"],
      genre: ["comedy", "action", "adventure"],
      mature: true
    }
  ]
}

```
