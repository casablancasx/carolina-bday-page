import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => (
  <div className={styles.infoWrapper}>
    <h1 className={styles.name}>John Doe</h1>
    <p className={styles.bio}>Web Developer | Tech Enthusiast | Lifelong Learner</p>
    <div className={styles.stats}>
      <div className={styles.statItem}>
        <span className={styles.statValue}>150</span>
        <span className={styles.statLabel}>Friends</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statValue}>200</span>
        <span className={styles.statLabel}>Posts</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statValue}>50</span>
        <span className={styles.statLabel}>Photos</span>
      </div>
    </div>
    
  </div>
)



export default ProfileInfo