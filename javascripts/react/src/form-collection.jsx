/** @jsx React.DOM */

var SideNavigation = React.createClass({
  componentDidMount: function() {
    $('#the-fucking-btn').click(function() {
      $('.special').velocity("fadeIn", {duration: 100})
      .velocity({left: "50px"});
      $(this).velocity("fadeOut", {duration: 100});
    });
    $('#close').click(function(e) {
      e.preventDefault();
      $('.special').velocity("fadeOut", {duration: 100})
      .velocity({left: "0px"});
      $('#the-fucking-btn').velocity("fadeIn", {duration: 100});
    });
  },
  render: function() {
    return (
      <div>
        <i className='uk-icon-bars' id='the-fucking-btn'></i>
        <ul className="uk-nav uk-nav-side special">
          <li>
            <a href="/happiness/">
              Happy
            </a>
          </li>
          <li>
            <a href="/sadness/">
              Sad
            </a>
          </li>
          <li>
            <a href="/change/">
              Change
            </a>
          </li>
          <li>
            <a href="/kudos/">
              Kudos
            </a>
          </li>
          <li className='uk-nav-divider' />
          <li>
            <a id='close' href="">
              <i className='uk-icon-close'></i> Close
            </a>
          </li>
        </ul>
      </div>
    )
  }
});

var HappinessForm = React.createClass({
  componentDidMount: function() {
    $('#happy').submit(function(e) {
      e.preventDefault();
      var happinessRef = new Firebase('https://retro-fah.firebaseio.com/happiness');
      var message = $('[name="message"]').val();
      if(message == '') {
        alert('Stop Trolling! Write first, then send! GAWD!');
        return false;
      }
      // $('.message-history').append('<li>' + message + '</li>');
      happinessRef.push({message: message});
      $('[name="message"]').val('');

      // Fun with Velocity
      $('#smily').velocity({opacity: 1})
      .velocity({scale: 8, opacity: 0})
      .velocity({scale: 1})
    });
  },
  render: function() {
    return (
      <main>
        <SideNavigation />
        <form className='uk-form' id='happy'>
          <h1 className='uk-text-center'>
            Tell us why you're
            <span className='main-colour'> Happy</span>
          </h1>
          <div className='uk-container uk-container-center'>
            <textarea name='message' placeholder='happy eh?' className='uk-align-center' autofocus='true'></textarea>
            <button className='uk-button' type='submit'>Send Happy Thoughts!</button>
            <h1 id='smily'><i className='uk-icon-smile-o'></i></h1>
          </div>
        </form>
      </main>
    )
  }
});

var SadnessForm = React.createClass({
  componentDidMount: function() {
    $('#sadness').submit(function(e) {
      e.preventDefault();
      var sadnessRef= new Firebase('https://retro-fah.firebaseio.com/sadness');
      var message = $('[name="message"]').val();
      if(message == '') {
        alert('Stop Trolling! Write first, then send! GAWD!');
        return false;
      }
      sadnessRef.push({message: message});
      $('[name="message"]').val('');

      // Fun with Velocity
      $('#smily').velocity({opacity: 1})
      .velocity({scale: 8, opacity: 0})
      .velocity({scale: 1})
    });
  },
  render: function() {
    return (
      <main>
        <SideNavigation />
        <form className='uk-form' id='sadness'>
          <h1 className='uk-text-center'>Y u so <span className='main-colour'>Sad?</span></h1>
          <div className='uk-container uk-container-center'>
            <textarea name='message' placeholder="I don't want to set the world.. on.. fire..." />
            <button className='uk-button' type='submit'>Feel Better!</button>
            <h1 id='smily'><i className='uk-icon-smile-o'></i></h1>
          </div>
        </form>
      </main>
    )
  }
});

var KudosForm = React.createClass({
  componentDidMount: function() {
    $('#kudos').submit(function(e) {
      e.preventDefault();
      var kudosRef = new Firebase('https://retro-fah.firebaseio.com/kudos');
      var message = $('[name="message"]').val();
      if(message == '') {
        alert('Stop Trolling! Write first, then send! GAWD!');
        return false;
      }
      kudosRef.push({message: message});
      $('[name="message"]').val('');

      $('#smily').velocity({opacity: 1})
      .velocity({scale: 8, opacity: 0})
      .velocity({scale: 1})
    });
  },
  render: function() {
    return (
      <main>
        <SideNavigation />
        <form className='uk-form' id='kudos'>
          <h1 className='uk-text-center'>Give <span className='main-colour'>Credit</span> where <span className='main-colour'>Credit</span> is Due</h1>
          <div className='uk-container uk-container-center'>
            <textarea name='message' placeholder="Be nice..." />
            <button className='uk-button' type='submit'>
              <i className='uk-icon-heart'></i>
              Spread the Love
              <i className='uk-icon-heart'></i>
            </button>
            <h1 id='smily'><i className='uk-icon-heart'></i></h1>
          </div>
        </form>
      </main>
    )
  }
});

var ChangeForm = React.createClass({
  componentDidMount: function() {
    $('#change').submit(function(e) {
      e.preventDefault();
      var changeRef = new Firebase('https://retro-fah.firebaseio.com/change');
      var message = $('[name="message"]').val();
      if(message == '') {
        alert('Stop Trolling! Write first, then send! GAWD!');
        return false;
      }
      changeRef.push({message: message});
      $('[name="message"]').val('');

      $('#smily').velocity({opacity: 1})
      .velocity({scale: 8, opacity: 0})
      .velocity({scale: 1})
    });
  },
  render: function() {
    return (
      <main>
        <SideNavigation />
        <form className='uk-form' id='change'>
          <h1 className='uk-text-center'>Suggest a <span className='main-colour'>Change</span></h1>
          <div className='uk-container uk-container-center'>
            <textarea name='message' placeholder='If you find yourself sighing more than 10 times in less than 6 hours, what do you suggest to make it better.....' />
            <button className='uk-button' type='submit'>Make a suggestion</button>
            <h1 id='smily'><i className='uk-icon-smile-o'></i></h1>
          </div>
        </form>
      </main>
    )
  }
});

// Hack Router Method but whatever, ahhahahahah

if (location.pathname == '/happiness/') {
  React.renderComponent(
    <HappinessForm />,
    document.getElementById('main-app')
  );
}
else if (location.pathname == '/') {
  React.renderComponent(
    <HappinessForm />,
    document.getElementById('main-app')
  );
}
else if (location.pathname == '/sadness/') {
  React.renderComponent(
    <SadnessForm />,
    document.getElementById('main-app')
  );
}
else if (location.pathname == '/kudos/') {
  React.renderComponent(
    <KudosForm />,
    document.getElementById('main-app')
  );
}
else if (location.pathname == '/change/') {
  React.renderComponent(
    <ChangeForm />,
    document.getElementById('main-app')
  );
}

