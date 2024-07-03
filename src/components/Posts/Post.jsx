import styles from './Post.module.css';
import PropTypes from 'prop-types';

function Post({ title, content, urlImage}) {
  
  return (
    <article className={styles.post}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>
          {content}
        </p>
      </div>
      
      <img src={urlImage} alt="Imagem do javascript" />
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};

export default Post;