import { useState } from "react";
import { toast } from 'react-toastify';

import { useAuth } from "../../hooks/auth";

import { Container, UserInfo } from "./styles";

import { ExplorerLogo } from "../../assets/ExplorerLogo";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const [nameClass, setNameClass] = useState("");
  const [emailClass, setEmailClass] = useState("");
  const [newPasswordClass, setNewPasswordClass] = useState("");
  const [oldPasswordClass, setOldPasswordClass] = useState(""); 

  const [isLoading, setIsLoading] = useState(false);

  async function handleUpdate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setNameClass("");
    setEmailClass("");
    setNewPasswordClass("");
    setOldPasswordClass("");

    if (!name) {
      setNameClass("invalid");
      return toast.error("Nome é obrigatório!", { autoClose: 3000 });
    }

    if (!emailRegex.test(email)) {
      setEmailClass("invalid");
      return toast.error("Email inválido!", { autoClose: 3000 });
    }
    
    if (newPassword && newPassword.length < 6) {
      setNewPasswordClass("invalid");
      return toast.error("Senha deve ter no minimo 6 caracteres", { autoClose: 3000 })
    }

    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    const userUpdated = Object.assign(user, updated);

    setIsLoading(true);

    const error = await updateProfile({ user: userUpdated });

    if(error) {
      if(error === "server error") {
        setNameClass("invalid");
        setEmailClass("invalid");
        setOldPasswordClass("invalid");
        setNewPasswordClass("invalid");
      } else if (error === "Este e-mail já está em uso.") {
        setEmailClass("invalid");
      } else {
        setOldPasswordClass("invalid");
        setNewPasswordClass("invalid");
      }
    }

    setOldPassword("");
    setNewPassword("");

    setIsLoading(false);
  }

  return(
    <Container>
      <Header />
        <main>
          <ExplorerLogo size={120}/>

          <UserInfo>
            <h1>Olá, {user.name}</h1>
            <p>Para atualizar seu cadastro, altere as informações abaixo:</p>

            <form onSubmit={e => e.preventDefault()}>
              <div className="input-wrapper">
                <Label title="Nome" htmlFor="name" />
                <Input
                  id="name"
                  type="text"
                  validation={nameClass}
                  value={name}
                  onChange={(e) => {
                    setNameClass("");
                    setName(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="input-wrapper">
                <Label title="Email" htmlFor="email" />
                <Input
                  id="email"
                  type="email"
                  validation={emailClass}
                  value={email}
                  onChange={(e) => {
                    setEmailClass("");
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="input-wrapper">
                <Label title="Senha atual" htmlFor="old-password"/>
                <Input
                  id="old-password"  
                  type="password"
                  validation={oldPasswordClass}
                  value={oldPassword}
                  placeholder="Necessário para atualizar a senha"
                  onChange={(e) => {
                    setOldPasswordClass("");
                    setOldPassword(e.target.value);
                  }}
                />
              </div>

              <div className="input-wrapper">
                <Label title="Nova Senha" htmlFor="new-password"/>
                <Input
                  id="new-password"
                  type="password"
                  minLength="6"
                  validation={newPasswordClass}
                  value={newPassword}
                  placeholder="Mínimo 6 caracteres"
                  onChange={(e) => {
                    setNewPasswordClass("");
                    setNewPassword(e.target.value);
                  }}
                />
              </div>

              <Button 
                type="submit"
                title="Salvar Alterações" 
                className="primary"
                loading={isLoading}
                onClick={handleUpdate}
              />

            </form>
          </UserInfo>
          
        </main>
      <Footer />
    </Container>
  )
}