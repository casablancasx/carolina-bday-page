import React from 'react';
import styles from './CreatePost.module.css';

const CreatePost = () => {
  return (
    <div className={styles.postWrapper}>
      <div className={styles.postHeader}>postagem</div>
      <textarea
        className={styles.postTextarea}
        placeholder="diga alguma coisa para seus amigos ou poste uma foto, vídeo ou outro aqui..."
      />
      <div className={styles.postActions}>
        <button className={styles.actionButton}>postar</button>
        <button className={`${styles.actionButton} ${styles.cancelButton}`}>cancelar</button>
      </div>
    </div>
  );
};

export default CreatePost;