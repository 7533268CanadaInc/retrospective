/** @jsx React.DOM */

var MainView = React.createClass({
  render: function() {
    return (
      <Content />
    )
  }
});

var Header = React.createClass({
  render: function() {
    var nav_links = [
      {title: [<i className='uk-icon-code-fork' />, ' Fork this Project'], url: '/', className: 'call-to-action'}
    ];
    return (
      <HeaderComponent
        content={[
          <LogoContainer
            content={[
              <i className='uk-icon-flash'></i>,
              ' React Kit'
            ]}
          />,
          <NavigationBar
            content={
              <NavigationBarRight
                content={
                  <ListingComponent
                    items={nav_links}
                  />
                }
              />
            }
          />
        ]}
      />
    )
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <main>
        <SectionWithBackground
          sectionId='intro'
          content={[
            <Header />,
            <IntroContent />
          ]}
        />
      </main>
    )
  }
});

var IntroContent = React.createClass({
  render: function() {
    return (
      <div className='uk-width-1-3 uk-margin-large-top'>
        <h1 className='themed-heading'>
          Lightning Fast Development with React
        </h1>
        <p className='themed-heading'>
          Modular, verbose, and ready-to-go kit
        </p>
      </div>
    )
  }
});

React.renderComponent(
  <MainView />,
  document.getElementById('main-app')
);
