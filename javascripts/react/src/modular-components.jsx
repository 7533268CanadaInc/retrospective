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

var NavigationBarRight = React.createClass({
  render: function() {
    return (
      <div className='uk-navbar-flip'>
        {this.props.content}
      </div>
    )
  }
});

var LogoContainer = React.createClass({
  render: function() {
    return (
      <a className='uk-navbar-brand'>
        {this.props.content}
      </a>
    )
  }
});

var ListingComponent = React.createClass({
  render: function() {
    var listing = [];
    _.each(this.props.items, function(element, index, list) {
      listing.push(
        <li>
          <a className={element.className} href={element.url}>{element.title}</a>
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

var SectionWithBackground = React.createClass({
  render: function() {
    return (
      <section id={this.props.sectionId} className='uk-cover-background'>
        <div className='uk-width-3-4 uk-container-center padding-y-extra-large'>
          {this.props.content}
        </div>
      </section>
    )
  }
});
