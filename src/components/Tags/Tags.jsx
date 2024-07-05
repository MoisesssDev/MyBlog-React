import styles from './Tags.module.css';

function Tags() {
  return (
    <div className={styles.tags}>
      <span>#javascript</span>
      <span>#react</span>
      <span>#nodejs</span>
      <span>#html</span>
      <span>#css</span>
    </div>
  );
}

export default Tags;