import { toast } from 'react-toastify';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Form } from "./styles";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import Logo from "../../assets/logo-user.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailClass, setEmailClass] = useState("");
  const [passwordClass, setPasswordClass] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();

  async function handleSignIn(event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailClass('');
    setPasswordClass('');

    if(!emailRegex.test(email)) {
      setEmailClass("invalid");
      return toast.error("E-mail inválido!", { autoClose: 3000 });
    } else {
      setEmailClass("valid");
    }

    if (!password) {
      setPasswordClass("invalid");
      return toast.error("Campo senha é obrigatório!", { autoClose: 3000 });
    } else {
      setPasswordClass("valid");
    }

    setIsLoading(true);

    const error = await signIn({ email, password });

    if (error) {
      setEmailClass("invalid");
      setPasswordClass("invalid");
    }

    setIsLoading(false);
  }

  return(
    <Container>
      <img src={Logo} alt="Logo Food Explorer" />

      <Form onSubmit={handleSignIn}>
        <h2>Faça login</h2>

        <div className="input-wrapper">
          <Label title="Email" htmlFor="email" />
          <Input
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            id="email"
            name="email"
            validation={emailClass}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailClass("");
            }}
          />
        </div>

        <div className="input-wrapper">
          <Label title="Senha" htmlFor="password" />
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            id="password"
            name="password"
            validation={passwordClass}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordClass("");
            }}
          />
        </div>

        <Button 
          type="submit"
          title="Entrar" 
          className="primary"
          loading={isLoading}
        />

        <Link to="/register">
          Criar uma conta
        </Link>
        
      </Form>
    </Container>
  )
}