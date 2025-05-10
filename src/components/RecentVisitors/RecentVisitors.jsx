import React from 'react';
import styles from './RecentVisitors.module.css';
import imgPadrao from '../../assets/img-padrao.png';

const visitors = [
  { id: 1, name: 'Maria', photo: imgPadrao },
  { id: 2, name: 'João', photo: imgPadrao },
  { id: 3, name: 'Bia', photo: imgPadrao },
  { id: 4, name: 'Luiz', photo: imgPadrao },
  { id: 5, name: 'Ana', photo: imgPadrao },
  { id: 6, name: 'Carlos', photo: imgPadrao },
  { id: 7, name: 'Fernanda', photo: imgPadrao },
  { id: 8, name: 'Gabriel', photo: imgPadrao },
  { id: 9, name: 'Julia', photo: imgPadrao },
  { id: 10, name: 'Mateus', photo: imgPadrao },
  { id: 11, name: 'Paula', photo: imgPadrao },
];

const RecentVisitors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>visitantes recentes</span>
        <div className={styles.closeIcon}>×</div>
      </div>
      
      <div className={styles.statsInfo}>
        <span>última semana: 5</span>
        <span>todos: 873</span>
      </div>
      
      <div className={styles.visitorsGrid}>
        {visitors.map((visitor) => (
          <div key={visitor.id} className={styles.visitorItem}>
            <img 
              src={visitor.photo} 
              alt={visitor.name} 
              className={styles.visitorImg} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentVisitors;