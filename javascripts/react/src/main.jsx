/** @jsx React.DOM */



var MainLayout = React.createClass({
  componentDidMount: function() {


    ref.authWithPassword({
  email    : "bobtony@firebase.com",
  password : "correcthorsebatterystaple"
}, function(error, authData) {
  if (error === null) {
    // user authenticated with Firebase
    console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
  } else {
    console.log("Error authenticating user:", error);
  }
});

    var happinessRef = new Firebase('https://retro-fah.firebaseio.com/happiness');
    var sadnessRef= new Firebase('https://retro-fah.firebaseio.com/sadness');
    var kudosRef = new Firebase('https://retro-fah.firebaseio.com/kudos');
    var changeRef = new Firebase('https://retro-fah.firebaseio.com/change');

    happinessRef.on('child_added', function (snapshot) {
      var message = snapshot.val();
      $('#happiness').append('<p class="fades-in">' + message.message + '</p>');
    }.bind(this));

    sadnessRef.on('child_added', function (snapshot) {
      var message = snapshot.val();
      $('#sadness').append('<p class="fades-in">' + message.message + '</p>');
    }.bind(this));

    changeRef.on('child_added', function (snapshot) {
      var message = snapshot.val();
      $('#change').append('<p class="fades-in">' + message.message + '</p>');
    }.bind(this));

    kudosRef.on('child_added', function (snapshot) {
      var message = snapshot.val();
      $('#kudos').append('<p class="fades-in">' + message.message + '</p>');
    }.bind(this));
  },
  render: function() {
    debugger;
    return (
      <main>
        <div id='messagesDiv' />
        <ThreadComponent
          title='Happiness.'
          description='Things that made us happy over the last 2 weeks'
          id='happiness'
        />
        <ThreadComponent
          title='Sadness.'
          description='Things that made us sad.. :('
          id='sadness'
        />
        <ThreadComponent
          title='Change.'
          description='Things that could be better'
          id='change'
        />
        <ThreadComponent
          title='Kudos.'
          description='With love'
          id='kudos'
        />
      </main>
    )
  }
});

var ThreadComponent = React.createClass({
  render: function() {
    return (
      <section className='uk-container uk-container-center thread-container' id={this.props.id}>
        <h1>{this.props.title}</h1>
        <small>{this.props.description}</small>
        {this.props.content}
      </section>
    )
  }
});


React.renderComponent(
  <MainLayout />,
  document.getElementById('main-app')
);
