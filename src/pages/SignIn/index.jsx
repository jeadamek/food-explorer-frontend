import { toast } from 'react-toastify';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Form } from "./styles";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import Logo from "../../assets/logo-user.svg"

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();


  function handleSignIn() {
    if (!email, !password) {
      return toast.warn("Preencha todos os campos!");
    }

    setIsLoading(true);

    signIn({ email, password });

    setIsLoading(false);


  }

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
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <Label title="Senha" htmlFor="password" />
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            id="password"
            name="password"
            onChange={e => setpassword(e.target.value)}
          />
        </div>

        <Button 
          title="Entrar" 
          className="primary"
          loading={isLoading}
          onClick={handleSignIn}
        />

        <Link to="/register">
          Criar uma conta
        </Link>
        
      </Form>
    </Container>
  )
}