import React from 'react';
import styles from './UpdatesFeed.module.css';

// Exemplo de dados de postagem, idealmente viria de props ou estado
const samplePosts = [
  {
    id: 1,
    user: 'bruninho',
    avatarUrl: '', // Adicionar URL do avatar se tiver
    timestamp: '08 set.',
    content: (
      <>
        BENÇÃO DO LINKIN PARK VOLUME : ||| ||||| || |<br />
        ow seu rokeiro linkin park tá de volta e a benção do sucesso
        pode ser derramada em vc tbm!!1
        <br />
        pra ter a benção clique no novo vídeo e curta comente e
        compartilhe esse post imediatamente
        <br />
        se ignorar vai ser perseguido pela IOiRa do BaNhEiRo
        <br />
        <a href="https://lprk.co/fromzero" target="_blank" rel="noopener noreferrer">
          The Emptiness Machine (Official Music Video) - Linkin Park
        </a>
        <br />
        From Zero | The New Album | Available November 15th
        <br />
        Pre-Order: <a href="https://lprk.co/fromzero" target="_blank" rel="noopener noreferrer">https://lprk.co/fromzero</a>
      </>
    ),
    likes: 32,
    comments: 25,
    shares: 43, // Assumindo que o último número é compartilhamento
  },
  // Adicionar mais posts aqui se necessário
];

const UpdatesFeed = () => {
  return (
    <div className={styles.feedWrapper}>
      <div className={styles.feedHeader}>
        <span>atualizações de: amigos</span>
        <button className={styles.luckyButton}>sorte do dia</button>
      </div>
      <div className={styles.postsList}>
        {samplePosts.map((post) => (
          <div key={post.id} className={styles.postItem}>
            <div className={styles.postAuthorInfo}>
              {/* <img src={post.avatarUrl} alt={post.user} className={styles.avatar} /> */}
              <span className={styles.postUser}>{post.user}</span>
              <span className={styles.postTimestamp}>{post.timestamp}</span>
            </div>
            <div className={styles.postContent}>{post.content}</div>
            <div className={styles.postInteractions}>
              <span>{post.likes}</span>
              <span>{post.comments}</span>
              <span>{post.shares}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatesFeed;