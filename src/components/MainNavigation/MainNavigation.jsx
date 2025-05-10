import React from 'react';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#">início</a></li>
        <li className={styles.navItem}><a href="#">perfil</a></li>
        <li className={styles.navItem}><a href="#">recados</a></li>
        <li className={styles.navItem}><a href="#">comunidades</a></li>
      </ul>
    </nav>
  );
};

export default MainNavigation;