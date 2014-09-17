/** @jsx React.DOM */

// Global Helpers for Each

var ListingComponent = React.createClass({displayName: 'ListingComponent',
  render: function() {
    var listing = [];
    _.each(this.props.items, function(item, index, list){
      listing.push(
        React.DOM.li({key: index}, item)
      )
    });
    return (
      React.DOM.ul(null, 
        listing
      )
    )
  }
});
