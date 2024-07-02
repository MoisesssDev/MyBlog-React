import styles from './Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>MyBlog</h1>
          <input type="text" placeholder='Search'/>
        </div>

        <nav className={styles.navBar}>
          <a href="#">
            <span className='material-symbols-outlined'>
              notifications
            </span>
          </a>
          <a href="#">
            <span className='material-symbols-outlined'>
              account_circle
            </span>
          </a>
        </nav>
      </header>
      <div className={styles.msgBemVindo}>
        <p>Bem-vindo(a) ao melhor Blog de tecnologia</p>
      </div>
    </>
  );
}

export default Header;