import React, { Component } from 'react';
import icon1 from 'shared/images/installPopup1.png';
import icon2 from 'shared/images/installPopup2.png';
import styles from './InstallPopup.scss';

class InstallPopup extends Component {
  state = {
    // showInstallMessage: false,
    showInstallMessage: true,
  };

  componentWillMount() {
    if (window.navigator.userAgent.indexOf('iPhone') !== -1) {
      if (!window.navigator.standalone) {
        this.setState({ showInstallMessage: true });
      }
    }
  }

  render() {
    const { showInstallMessage } = this.state;
    if (!showInstallMessage) return null;

    return (
      <div className={styles.installPopup}>
        <div className={styles.right}>
          <img src={icon2} className={styles.icon2} alt="" />
        </div>
        <div className={styles.left}>
          Install this webapp on your iPhone: tap
          <img src={icon1} className={styles.icon1} alt="" />
          and then Add to homescreen.
        </div>
      </div>
    );
  }
}

export default InstallPopup;
