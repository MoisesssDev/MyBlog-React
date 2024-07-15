import { Link } from 'react-router-dom';
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
          <button>
            <p>Sair</p>
          </button>
        </>
        ) : (
          <Link to='login'>
            <p>Entrar</p>
            <span className='material-symbols-outlined'>
              login
            </span>
          </ Link>
        )   
      }
    </nav>
  );
}

NavBar.propTypes = {
  autenticado: PropsTypes.bool.isRequired,
  setUsuarioAutenticado: PropsTypes.func.isRequired
}

export default NavBar;