import React from 'react';
import styles from './InstallPopup.scss';
import icon1 from '../shared/images/installPopup1.png';
import icon2 from '../shared/images/installPopup2.png';

const InstallPopup = () => (
  <div className={styles.installPopup}>
    <div className={styles.right}>
      <img src={icon2} className={styles.icon2} alt="" />
    </div>
    <div className={styles.left}>
    Install this webapp on your iPhone:
    tap
      <img src={icon1} className={styles.icon1} alt="" />
    and then Add to homescreen.
    </div>
  </div>
);

export default InstallPopup;
