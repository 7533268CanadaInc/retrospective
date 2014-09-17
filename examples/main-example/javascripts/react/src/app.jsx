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

var Layout = React.createClass({
  render: function() {
    var movie_titles = _.pluck(data.movies, 'title');
    var movie_stars = _.pluck(data.movies, 'stars');
    var pulp_fiction_stars = _.findWhere(movie_stars, movie_titles == 'Pulp Fiction');
    debugger;
    return (
      <div>
        <Header />
        <Content />
        <ListingComponent
          items={movie_titles}
        />
        <h3>The stars of Pulp Fiction</h3>
        <ListingComponent
          items={pulp_fiction_stars}
        />
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
    var movie_titles = _.pluck(data.movies, "title"); // get just the "movie titles" from the object (underscore is amazing eh?)
    var title_listing = _.map(movie_titles, function(titles) {
      return <li key={titles}>{titles}</li> // We have to assign a unique key to each object within an array, and it can be anything you want it to be, in this case a string.
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

React.renderComponent(
  <Layout />,
  document.getElementById('app')
);
