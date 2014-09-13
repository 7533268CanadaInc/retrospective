/** @jsx React.DOM */

var MainView = React.createClass({
  render: function() {
    var nav_links = [
      {title: '1', url: '/'},
      {title: '2', url: '/'},
      {title: '3', url: '/'}
    ];
    return (
      <div>
        <HeaderComponent
          content={
            <NavigationBar
              content={
                <ListingComponent
                  items={nav_links}
                />
              }
            />
          }
        />
      </div>
    )
  }
});

var Body = React.createClass({
  render: function() {
    var listing = [
      {title: '1', url: '/'},
      {title: '2', url: '/'},
      {title: '3', url: '/'}
    ];
    return (
      <ListingComponent
        array={listing}
      />
    )
  }
})

React.renderComponent(
  <MainView />,
  document.getElementById('main-app')
);
