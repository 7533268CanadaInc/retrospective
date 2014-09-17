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
};

var Layout = React.createClass({displayName: 'Layout',
  render: function() {
    var movie_titles = _.pluck(data.movies, 'title');
    var movie_stars = _.pluck(data.movies, 'stars');
    var pulp_fiction_stars = _.findWhere(movie_stars, movie_titles == 'Pulp Fiction');
    debugger;
    return (
      React.DOM.div(null, 
        Header(null), 
        Content(null), 
        ListingComponent({
          items: movie_titles}
        ), 
        React.DOM.h3(null, "The stars of Pulp Fiction"), 
        ListingComponent({
          items: pulp_fiction_stars}
        )
      )
    )
  }
});

var Header = React.createClass({displayName: 'Header',
  render: function() {
    return (
      React.DOM.header(null, 
        React.DOM.ul(null, 
          React.DOM.li(null, 
            React.DOM.a({href: "something.html"}, "Link 1")
          ), 
          React.DOM.li(null, 
            React.DOM.a({href: "something2.html"}, "Link 2")
          ), 
          React.DOM.li(null, 
            React.DOM.a({href: "something3.html"}, "Link 3")
          )
        )
      )
    )
  }
});

var Content = React.createClass({displayName: 'Content',
  render: function() {
    var movie_titles = _.pluck(data.movies, "title"); // get just the "movie titles" from the object (underscore is amazing eh?)
    var title_listing = _.map(movie_titles, function(titles) {
      return React.DOM.li({key: titles}, titles) // We have to assign a unique key to each object within an array, and it can be anything you want it to be, in this case a string.
    });
    return (
      React.DOM.section({id: "main-content"}, 
        React.DOM.h3(null, "List of Quentin Tarantino's movies"), 
        React.DOM.ul({id: "list-of-directors"}, 
          title_listing
        )
      )
    )
  }
});

React.renderComponent(
  Layout(null),
  document.getElementById('app')
);
