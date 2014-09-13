/** @jsx React.DOM */

var MainLayout = React.createClass({
  render: function() {
    return (
      <div>
        <HeaderComponent />
        <p>OMG</p>
      </div>
    )
  }
});

React.renderComponent(
  <MainLayout />,
  document.getElementById('main-app')
);
