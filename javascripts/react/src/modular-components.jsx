/** @jsx React.DOM */

var HeaderComponent = React.createClass({
  render: function() {
    return (
      <header>
        {this.props.content}
      </header>
    )
  }
});

var NavigationBar = React.createClass({
  render: function() {
    return (
      <nav className='uk-navbar'>
        {this.props.content}
      </nav>
    )
  }
});

var ListingComponent = React.createClass({
  render: function() {
    var listing = [];
    _.each(this.props.items, function(element, index, list) {
      listing.push(
        <li>
          <a href={element.url}>{element.title}</a>
        </li>
      )
    });
    return(
      <ul className='uk-navbar-nav'>
        {listing}
      </ul>
    )
  }
});
