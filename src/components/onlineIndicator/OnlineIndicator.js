import React, { Component } from 'react';

class OnlineIndicator extends Component {
  state = {
    online: true,
  };

  componentDidMount() {
    window.addEventListener('online', () => this.setOnlineStatus(true));
    window.addEventListener('offline', () => this.setOnlineStatus(false));
  }

  componentWillUnmount() {
    window.removeEventListener('online');
    window.removeEventListener('offline');
  }

  setOnlineStatus = isOnline => this.setState({ online: isOnline });

  render() {
    const { online } = this.state;
    if (online) return null;

    return <div className="offline">App is offline</div>;
  }
}

export default OnlineIndicator;
