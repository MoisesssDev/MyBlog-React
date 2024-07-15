import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Created by <a href="https://github.com/MoisesssDev" target='blank'>Moises Almeida</a></p>
      <h2>MyBlog</h2>
    </footer>
  );
}

export default Footer;