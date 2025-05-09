import React from 'react';
import styles from './MainPageContainer.module.css';

const MainPageContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default MainPageContainer;