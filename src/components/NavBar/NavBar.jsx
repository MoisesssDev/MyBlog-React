import styles from './NavBar.module.css';
import PropsTypes from 'prop-types';

function NavBar(props) {
  return (
    <nav className={styles.navBar}>
      { props.autenticado ? (
        <>
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
        </>
        ) : (
          <a href="#">
            <p>Login</p>
            <span className='material-symbols-outlined'>
              login
            </span>
          </a>
        )   
      }
    </nav>
  );
}

NavBar.propTypes = {
  autenticado: PropsTypes.bool.isRequired
}

export default NavBar;