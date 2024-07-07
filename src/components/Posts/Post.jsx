import styles from './Post.module.css';
import PropTypes from 'prop-types';

function Post({ title, content, urlImage, author, avatar, date}) {
  
  return (
    <article className={styles.post}>
      <div className={styles.headerPost}>
        <div className={styles.author}>
          <img src={avatar} alt="Avatar do autor" />
          <span>{author}</span>
        </div>

        <div className={styles.date}>
          <span>{date}</span>
        </div>
      </div>

      <div className={styles.mainPost}>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>
            {content}
          </p>
        </div>
        
        <img src={urlImage} alt="Imagem do javascript" />
      </div>
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Post;