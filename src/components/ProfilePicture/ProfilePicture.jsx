import React from 'react'
import styles from './ProfilePicture.module.css'
import profilePic from '../../assets/profile-picture.jpg'

// ...existing code...
const ProfilePicture = () => (
    <div className={styles.profileWrapper}>
      <img
        src={profilePic}
        alt="Profile"
        className={styles.profileImage}
      />
      <div className={styles.statusProfile}>disponível</div>
    </div>
  )
  // ...existing code...

export default ProfilePicture