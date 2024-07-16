import { Link } from 'react-router-dom';
import styles from './HeaderPrimary.module.css';

function HeaderPrimary() {
  return (
    <header className="header-primary">
      <Link className={styles.linkToHome} to="/">
        <span className="material-symbols-outlined">arrow_back_ios</span>voltar para home
      </Link>
      <div className={styles.logoContainer}>
          <h1>MyBlog</h1>
        </div>
    </header>
  );
}

export default HeaderPrimary;