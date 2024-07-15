import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main>
      <Form className={styles.form}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <div className={styles.actions}>
          <Button variant="dark" type="submit">
            Entrar
          </Button>
          <Button className={styles.loginGoogle} variant="danger" type="submit">
            <img src="https://img.icons8.com/?size=100&id=17904&format=png&color=FFFFFF" alt="Imagem do Google" />
            Entrar com o Google
          </Button>
        </div>
        <div className={"text-body-secondary mt-3 " + styles.signUp}>
          <p>Não tem conta? <Link to="/signUp">Cadastre-se</Link></p>
        </div>
      </Form>
    </main>
  )
}

export default Login