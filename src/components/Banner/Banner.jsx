import styles from './Banner.module.css';
import PropsTypes from 'prop-types';

function Banner(props) {
  const message = (usuarioAutenticado) => {
    if (usuarioAutenticado) {
      return <p>Bem-vindo(a) ao melhor Blog de tecnologia</p>;
    }
    return <p>Faça parte do melhor Blog de tecnologia. <a href="#">Crie sua conta!</a></p>;
  }

  return (
    <div className={styles.msgBemVindo}>
      {message(props.autenticado)}
    </div>
  );
}

Banner.propTypes = {
  autenticado: PropsTypes.bool.isRequired
};

export default Banner;