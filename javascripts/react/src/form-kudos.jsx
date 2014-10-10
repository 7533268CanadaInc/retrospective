/** @jsx React.DOM */

var HappinessForm = React.createClass({
  componentDidMount: function() {
    $('#happy').submit(function(e) {
      e.preventDefault();
      var happinessRef = new Firebase('https://retro-fah.firebaseio.com/happiness');
      var message = $('[name="message"]').val();
      happinessRef.push({message: message});
      $('[name="message"]').val('');
    });
  },
  render: function() {
    return (
      <form className='uk-form' id='happy'>
        <input type='text' name='message' />
        <button className='uk-button' type='submit'>Send</button>
      </form>
    )
  }
});

React.renderComponent(
  <HappinessForm />,
  document.getElementById('main-app')
);
