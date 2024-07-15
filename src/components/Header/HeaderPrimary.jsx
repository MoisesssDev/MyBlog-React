import styles from './HeaderPrimary.module.css';

function HeaderPrimary() {
  return (
    <header className="header-primary">
      <div className={styles.logoContainer}>
          <h1>MyBlog</h1>
        </div>
    </header>
  );
}

export default HeaderPrimary;