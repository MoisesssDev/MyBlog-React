import styles from './Header.module.css';
import NavBar from '../NavBar/NavBar';
import PropsTypes from 'prop-types';
import Banner from '../Banner/Banner';
import { useState } from 'react';

function Header(props) {

  const [usuarioAutenticado, setUsuarioAutenticado] = useState(props.autenticado);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>MyBlog</h1>
          <input type="text" placeholder='Search'/>
        </div>

        <NavBar 
          autenticado={usuarioAutenticado}
          setUsuarioAutenticado={setUsuarioAutenticado}
        />
      </header>
      <Banner 
        autenticado={usuarioAutenticado}
      /> 
    </>
  );
}

Header.propTypes = {
  autenticado: PropsTypes.bool.isRequired
};

export default Header;