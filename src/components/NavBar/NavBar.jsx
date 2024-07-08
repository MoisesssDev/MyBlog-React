import styles from './NavBar.module.css';
import { useState } from 'react';
import PropsTypes from 'prop-types';

function NavBar(props) {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(props.autenticado);

  const handleClick = () => {
    alert('Bem vindo!');
    
    setUsuarioAutenticado(!usuarioAutenticado);
  }

  return (
    <nav className={styles.navBar}>
      { usuarioAutenticado ? (
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
  autenticado: PropsTypes.bool.isRequired
}

export default NavBar;