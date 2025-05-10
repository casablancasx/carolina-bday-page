import React from 'react';
import styles from './Friends.module.css';
import imgPadrao from '../../assets/img-padrao.png';

const friends = [
  { id: 1, name: 'jz_bella', photo: imgPadrao, online: true },
  { id: 2, name: 'EU SOU O BEN 10', photo: imgPadrao, online: false },
  { id: 3, name: 'vih • ❥', photo: imgPadrao, online: true },
  { id: 4, name: 'runniny', photo: imgPadrao, online: false },
  { id: 5, name: 'malu_2', photo: imgPadrao, online: true },
  { id: 6, name: 'gabriel >_<', photo: imgPadrao, online: false },
  { id: 7, name: 'laila 🧚‍♀️', photo: imgPadrao, online: true },
  { id: 8, name: 'monica', photo: imgPadrao, online: false },
  { id: 9, name: 'ana paula', photo: imgPadrao, online: true },
];

const Friends = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>amigos</span>
        <span className={styles.count}>(567)</span>
        <div className={styles.icons}>
          <span className={styles.editIcon}>✏️</span>
          <span className={styles.closeIcon}>×</span>
        </div>
      </div>
      
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchIcon}>🔍</div>
          <input 
            type="text" 
            placeholder="escreva o nome da amizade..." 
            className={styles.searchInput}
          />
        </div>
      </div>
      
      <div className={styles.friendsGrid}>
        {friends.map((friend) => (
          <div key={friend.id} className={styles.friendItem}>
            <img 
              src={friend.photo} 
              alt={friend.name} 
              className={styles.friendImg} 
            />
            <div className={styles.friendName}>{friend.name}</div>
            {friend.online && <div className={styles.onlineDot}></div>}
          </div>
        ))}
      </div>
      
      <div className={styles.footer}>
        <span className={styles.onlineStatus}>3 amigos online</span>
      </div>
    </div>
  );
};

export default Friends;