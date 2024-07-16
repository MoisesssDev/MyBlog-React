import styles from './FormSignUp.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function FormSignUp() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <main>
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-5">Criar conta</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="E-mail"
            {...register("email", { required: 'e-mail obrigatório' })}
          />
          { errors.email && <p className="text-danger">{errors.email.message}</p> }
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Senha"
            {...register("password", { required: 'senha obrigatória' })}
          />
          { errors.password && <p className="text-danger">{errors.password.message}</p> }
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirme a senha</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Confirme a senha"
            {...register("confirmPassword", { required: 'senha obrigatória' })}
          />
          { errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p> }
        </Form.Group>

        <div className={styles.actions}>
          <Button variant="dark" type="submit">
            Criar conta 
          </Button>
          <Button className={styles.loginGoogle} variant="danger" type="submit">
            <img src="https://img.icons8.com/?size=100&id=17904&format=png&color=FFFFFF" alt="Imagem do Google" />
            Criar conta com o Google 
          </Button>
        </div>
        <div className={"text-body-secondary mt-3 " + styles.signUp}>
          <p>Já possui conta? <Link to="/login">Fazer login</Link></p>
        </div>
      </Form>
    </main>
  )
}

export default FormSignUp