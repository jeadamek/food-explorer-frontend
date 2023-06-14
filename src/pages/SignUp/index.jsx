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

  const [nameClass, setNameClass] = useState("");
  const [emailClass, setEmailClass] = useState("");
  const [passwordClass, setPasswordClass] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navegate = useNavigate();
  
  async function handleSignUp(event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setNameClass("");
    setEmailClass("");
    setPasswordClass("");

    if (!name) {
      setNameClass("invalid");
      return toast.error("Campo nome é obrigatório!", { autoClose: 3000 });
    } else {
      setNameClass("valid");
    }

    if (!emailRegex.test(email)) {
      setEmailClass("invalid");
      return toast.error("Email inválido!", { autoClose: 3000 });
    } else {
      setEmailClass("valid");
    }

    if (password.length < 6) {
      setPasswordClass("invalid");
      return toast.error("Senha deve ter no minimo 6 caracteres", { autoClose: 3000 })
    } else {
      setPasswordClass("valid");
    }

    setIsLoading(true);

    api.post("/users", { name, email, password})
      .then(() => {
        
        toast.success("Usuário cadastrado com sucesso!");
        navegate("/");
      })
      .catch(error => {
        if(error.response) {
          setEmailClass("invalid");
          
          toast.error(error.response.data.message, { autoClose: 3000 });
        } else {          
          setNameClass("");
          setEmailClass("");
          setPasswordClass("");

          toast.error("Não foi possível cadastrar. Tente novamente mais tarde.", { autoClose: 3000 });
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return(
    <Container>
      <img src={Logo} alt="Logo Food Explorer" />

      <Form onSubmit={handleSignUp}>
        <h2>Crie sua conta</h2>

        <div className="input-wrapper">
          <Label title="Seu nome" htmlFor="name" />
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Exemplo: Maria da Silva"
            validation={nameClass}
            onChange={(e) => {
              setName(e.target.value);
              setNameClass("");
            }}
          />
        </div>

        <div className="input-wrapper">
          <Label title="Email" htmlFor="email" />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
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
            id="password"
            name="password"
            placeholder="No mínimo 6 caracteres"
            validation={passwordClass}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordClass("");
            }}
          />
        </div>

        <Button 
          type="submit"
          title="Criar conta" 
          className="primary" 
          loading={isLoading}
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}