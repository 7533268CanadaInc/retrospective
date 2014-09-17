# React Kit

**author: Gregory Tandiono**

Kickstart your project with Facebook's
[React](http://facebook.github.io/react/) with pre-built components
to make your life easier!


## Intro

Before you go beyond this point, please visit
[React's](http://facebook.github.io/react/) project page and read up on
how React works, because I won't be covering the basics of the library.
In addition to React, I will be using
[underscore.js](http://underscorejs.org) 90% of the time for the sake of
sanity. (nested for loops == sad panda)

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

First of all, let's setup the project directory (you can also see this
example in `examples/main-example` directory)
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
    <div id='app'></div>

    <!-- Project Dependencies -->
    <script src="http://fb.me/react-0.11.1.js"></script>
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js"></script>

    <!-- Project-Specific Scripts-->
    <script src="javascripts/react/build/app.js"></script>
  </body>
</html>
```

We're going to be using [underscore.js](http://underscorejs.org/) for the
sake of maintaining sanity (and avoiding the use of for loops or the
dreaded nested for loops) :).

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
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <section id='main-content'>
        <h3>List of Quentin Tarantino\'s movies</h3>
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

***

Ok let's say you've fetched an object that looks like this:

**app.jsx**
```javascript
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
This is how you can use React to inject this data into the view (please
not that I'm using underscore.js for the sake of sanity):

**app.jsx**
```javascript
...

var Content = React.createClass({
  render: function() {
    var movie_titles = _.pluck(data.movies, "title"); // get just the "movie titles" from the object (underscore is amazing eh?)
    var title_listing = _.map(movie_titles, function(titles) {
      return <li>{titles}</li>
    });
    return (
      <section id='main-content'>
        <h3>List of Quentin Tarantino's movies</h3>
        <ul id='list-of-directors'>
          {title_listing}
        </ul>
      </section>
    )
  }
});

...
```

You should now see a list of movie titles populated in the view!

If you open your browser console, you should see a warning that reads:
>Each child in an array should have a unique "key" prop. Check the
render method of Content

See this documentation about this from React: http://facebook.github.io/react/docs/multiple-components.html#dynamic-children

The key can be anything you want, as long as it is unique, it can also
be a unique string. For the sake of the example, we're going to use
strings as keys (but, realistically, anything you retrieve should have
a random string as ids in the object, and you should use that as keys)

**app.jsx** (see line 7)
```javascript
...

var Content = React.createClass({
  render: function() {
    var movie_titles = _.pluck(data.movies, "title");
    var title_listing = _.map(movie_titles, function(titles) {
      return <li key={titles}>{titles}</li>
    });
    return (
      <section id='main-content'>
        <h3>List of Quentin Tarantino's movies</h3>
        <ul id='list-of-directors'>
          {title_listing}
        </ul>
      </section>
    )
  }
});

...
```

Refresh the page, and open up the console. The warning should not be
there anymore. If you open up the DOM inspector you will be able to see
the keys in `data-reactid` attribute.

By now, you should be able to experiment the usage of React +
Underscore, but what I want to show you is the power of making React
modular components, I like to call this **React Utilities** and that is
what **React Kit** is all about!

So let's create another file in `javascripts/react/src/` directory, and
let's call it `utils.jsx` & please include the build file in the
`index.html` file above the app.js build file, like this:

```html
...

    <!-- Project-Specific Scripts-->
    <script src="javascripts/react/build/utils.js"></script>
    <script src="javascripts/react/build/app.js"></script>
  </body>

...
```

We're going to make a listing component with a listing method using
underscore.js and the use of **props**.

**utils.jsx**
```javascript
/** @jsx React.DOM */

var ListingComponent = React.createClass({
  render: function() {
    var listing = [];
    _.each(this.props.items, function(item, index, list) {
      listing.push(
        <li key={index}>{item}</li>
      )
    });
    return (
      <ul>
        {listing}
      </ul>
    )
  }
});
```

If you have used React before or at least acquainted with their use of
`props`, you'll probably know exactly what that does. If you don't know
what props is, here is a link that explains how `props` work:
http://facebook.github.io/react/docs/tutorial.html

So let's use this `ListingComponent` in our main layout to fetch a list
of movies.

**app.jsx**
```javascript
...

var Layout = React.createClass({
  render: function() {
    var movie_titles = _.pluck(data.movies, 'title'); // this will give you ['Pulp Fiction', 'Inglourious Basterds', 'Reservoir Dogs']
    return (
      <div>
        <Header />
        <ListingComponent
          items={movie_titles}
        />
      </div>
    )
  }
});

...
```
..and voila! You should get a list of movies!

Let's play around with React's **Props** method. So we're going to
modify the `ListingComponent` so that it will be more flexible.

**utils.jsx**
```javascript
...

var ListingComponent = React.createClass({
  render: function() {
    var listing = [];
    _.each(this.props.items, function(item, index, list){
      listing.push(
        <li key={index}>{item}</li>
      )
    });
    return (
      <ul>
        {listing}
        {this.props.content}
      </ul>
    )
  }
});

...
```

Notice that I've just included the `{this.props.content}` and let's see what
we can do with the main app controller.

**app.jsx**
```javascript
...

var Layout = React.createClass({
  render: function() {
    var movie_titles = _.pluck(data.movies, 'title'); // this will give you ['Pulp Fiction', 'Inglourious Basterds', 'Reservoir Dogs']
    return (
      <div>
        <Header />
        <ListingComponent
          items={movie_titles}
        />
        <ListingComponent
          content={
            <li>Yeap, you can do these kind of things in React, neat eh?</li>
          }
        />
      </div>
    )
  }
});

...
```

Let's do something more complicated, let's have that same component
populate a list that contains a movie title, year of release, and the
stars.

```javascript
...

var Layout = React.createClass({
  render: function() {
    var movie_listing = [];
    _.each(data.movies, function(element, index, list) {
      movie_listing.push(
        <li key={index}>
          <h4>{element.title}</h4>
          <p>{element.year}</p>
          <h5>Starring:</h5>
          <p>{(element.stars).join(', ')}</p>
        </li>
      )
    });
    return (
      <div>
        <Header />
        <Content />
        <ListingComponent
          content={movie_listing}
        />
      </div>
    )
  }
});

...
```

Refresh your browser and the component should render the correct data!

## Coming Soon!
- Using Grunt to compile jsx to js
- React Kit UI Tree Philosophy & Implementation
- React Kit Components Documentation
- Creating Custom Components
- React Kit Animation using Velocity
- Writing Tests for your react components

React Kit Tree Preview:

```javascript
/** @jsx React.DOM */

var MainView = React.createClass({
  render: function() {
    return (
      <Content />
    )
  }
});

var Header = React.createClass({
  render: function() {
    var nav_links = [
      {title: [<i className='uk-icon-code-fork' />, ' Fork this Project'], url: '/', className: 'call-to-action'}
    ];
    return (
      <HeaderComponent
        content={[
          <LogoContainer
            content={[
              <i className='uk-icon-flash'></i>,
              ' React Kit'
            ]}
          />,
          <NavigationBar
            content={
              <NavigationBarRight
                content={
                  <ListingComponent
                    items={nav_links}
                  />
                }
              />
            }
          />
        ]}
      />
    )
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <main>
        <SectionWithBackground
          sectionId='intro'
          content={[
            <Header />,
            <IntroContent />
          ]}
        />
      </main>
    )
  }
});

var IntroContent = React.createClass({
  render: function() {
    return (
      <div className='uk-width-1-3 uk-margin-large-top'>
        <h1 className='themed-heading'>
          Lightning Fast Development with React
        </h1>
        <p className='themed-heading'>
          Modular, verbose, and ready-to-go kit
        </p>
        <IntroAnimation />
      </div>
    )
  }
});

var IntroAnimation = React.createClass({
  componentDidMount: function() {
    var s = Snap('#svg');
    var large_circle = s.circle(200, 50, 50);
    large_circle.attr({
      fill: "#ffffff"
    });
  },
  render: function() {
    return (
      <svg id='svg'></svg>
    )
  }
});

React.renderComponent(
  <MainView />,
  document.getElementById('main-app')
);
```
