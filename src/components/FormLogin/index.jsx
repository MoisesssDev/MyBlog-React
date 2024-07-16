import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <main>
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-5">Login</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="E-mail"
            {...register("email", { required: 'e-mail obrigatório' })}
          />
          { errors.email && <p className="text-danger">{errors.email.message}</p> }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Senha"
            {...register("password", { required: 'senha obrigatória' })}
          />
          { errors.password && <p className="text-danger">{errors.password.message}</p> }
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