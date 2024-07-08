import styles from './NavBar.module.css';
import PropsTypes from 'prop-types';

function NavBar(props) {

  const handleClick = () => {
    props.autenticado ? alert('Você saiu!') : alert('Você entrou!');
    
    props.setUsuarioAutenticado(!props.autenticado);
  }

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
          <button onClick={handleClick}>
            <p>Sair</p>
          </button>
        </>
        ) : (
          <button onClick={handleClick}>
            <p>Entrar</p>
            <span className='material-symbols-outlined'>
              login
            </span>
          </button>
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