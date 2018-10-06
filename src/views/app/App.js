import React, { Component } from 'react';
import classNames from 'classnames';
import { Route } from 'react-router-dom';
import { Rates, Wallet } from 'views';
import { InstallPopup, OnlineIndicator, Navigation, Initializer } from 'components';
import 'components/style.scss';

class App extends Component {
  isIos = () => window.navigator.userAgent.indexOf('iPhone') !== -1;
  isStandalone = () => window.navigator.standalone;

  render() {
    return (
      <div className={classNames({ 'is-ios': this.isIos(), 'is-standalone': this.isStandalone() })}>
        <Navigation />
        <Route exact path="/" component={Rates} />
        <Route path="/wallet" component={Wallet} />
        <OnlineIndicator />
        <InstallPopup />
        <Initializer />
      </div>
    );
  }
}

export default App;
