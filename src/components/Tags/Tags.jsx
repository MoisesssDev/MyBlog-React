import styles from './Tags.module.css';
import PropsTypes from 'prop-types';

function Tags({ tags }) {
  return (
    <div className={styles.containerTags}>
      <h3>Principais tags do momento</h3>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <a href='#' key={index} className={styles.tag}>#{tag}</a>
        ))}
      </div>
    </div>
  );
}

Tags.propTypes = {
  tags: PropsTypes.array.isRequired,
};

export default Tags;