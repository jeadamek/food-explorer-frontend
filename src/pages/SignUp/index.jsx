import { toast } from 'react-toastify';

import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Container, Form } from "./styles";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import Logo from "../../assets/logo-user.svg"

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navegate = useNavigate();

  async function handleSignUp() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !password) {
      return toast.warn("Preencha todos os campos!");
    }

    if (!emailRegex.test(email)) {
      return toast.warn("Email inválido!");
    }

    if (password.length < 6) {
      return toast.warn("Senha deve ter no minimo 6 caracteres")
    }

    setIsLoading(true);

    api.post("/users", { name, email, password})
      .then(() => {
        
        toast.success("Usuário cadastrado com sucesso!");
        navegate("/");
      })
      .catch(error => {
        if(error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível cadastrar");
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

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
            onChange={e => setName(e.target.value)}
          />
        </div>

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
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button 
          title="Criar conta" 
          className="primary" 
          loading={isLoading}
          onClick={handleSignUp}
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}