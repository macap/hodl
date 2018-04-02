import React, { Component } from 'react';
import {
  Route,
  NavLink as Link,
} from 'react-router-dom';
import Rates from './Rates';
import Wallet from './Wallet';
import InstallPopup from './InstallPopup';
import './style.scss';

class App extends Component {
  state = {
    showInstallMessage: false,
    online: true,
  }
  componentWillMount() {
    if (window.navigator.userAgent.indexOf('iPhone') !== -1) {
      if (!window.navigator.standalone) {
        this.setState({ showInstallMessage: true });
      }
    }
  }

  componentDidMount() {
    window.addEventListener('online', () => this.setOnlineStatus(true));
    window.addEventListener('offline', () => this.setOnlineStatus(false));
  }

  componentWillUnmount() {
    window.removeEventListener('online');
    window.removeEventListener('offline');
  }

  setOnlineStatus = isOnline => this.setState({ online: isOnline })


  render() {
    const { showInstallMessage, online } = this.state;
    return (
      <div>
        <ul className="nav">
          <li><Link exact activeClassName="active" to="/" href="/">Rates</Link></li>
          <li><Link activeClassName="active" to="/wallet" href="/wallet">Wallet</Link></li>
        </ul>
        <Route exact path="/" component={Rates} />
        <Route path="/wallet" component={Wallet} />
        {online || <div className="offline">App is offline</div>}
        {showInstallMessage && <InstallPopup />}
      </div>
    );
  }
}

export default App;
