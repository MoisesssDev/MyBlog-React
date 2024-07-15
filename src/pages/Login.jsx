import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HeaderPrimary from '../components/Header/HeaderPrimary';

function Login() {
  return (
    <>
      <HeaderPrimary />

      <main>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Teste@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </main>
    </>
  );
}

export default Login;