import styles from './Header.module.css';
import NavBar from '../NavBar/NavBar';
import PropsTypes from 'prop-types';
import Banner from '../Banner/Banner';

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>MyBlog</h1>
          <input type="text" placeholder='Search'/>
        </div>

        <NavBar autenticado={props.autenticado}/>
      </header>
      <Banner autenticado={props.autenticado} /> 
    </>
  );
}

Header.propTypes = {
  autenticado: PropsTypes.bool.isRequired
};

export default Header;