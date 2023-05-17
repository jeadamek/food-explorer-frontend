import { Container, Form } from "./styles";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from 'react-router-dom';

import Logo from "../../assets/logo-user.svg"

export function SignUp() {
  return(
    <Container>
      <img src={Logo} alt="Logo Food Explorer" />

      <Form>
        <h2>Crie sua conta</h2>

        <div className="input-wrapper">
          <Label title="Seu nome" htmlFor="name" />
          <Input
            type="text"
            placeholder="Exemplo: Maria da Silva"
            id="name"
            name="name"
          />
        </div>

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

        <Button title="Criar conta" className="primary" />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}