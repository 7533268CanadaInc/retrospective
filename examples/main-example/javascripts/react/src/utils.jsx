/** @jsx React.DOM */

// Global Helpers for Each

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
      </ul>
    )
  }
});
