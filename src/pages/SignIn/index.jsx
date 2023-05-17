import { Container, Form } from "./styles";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from 'react-router-dom';

import Logo from "../../assets/logo-user.svg"

export function SignIn() {
  return(
    <Container>
      <img src={Logo} alt="Logo Food Explorer" />

      <Form>
        <h2>Faça login</h2>

        <div className="input-wrapper">
          <Label title="Email" htmlFor="email" />
          <Input
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            id="email"
            name="email"
          />
        </div>

        <div className="input-wrapper">
          <Label title="Senha" htmlFor="password" />
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            id="password"
            name="password"
          />
        </div>

        <Button title="Entrar" className="primary" />

        <Link to="/register">
          Criar uma conta
        </Link>
        
      </Form>
    </Container>
  )
}