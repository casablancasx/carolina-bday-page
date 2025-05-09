import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/Logo_ORKUT.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
        <button className={styles.searchButton}>Search</button>
      </div>
    </header>
  )
}

export default Header