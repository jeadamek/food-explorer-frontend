import { useState, useEffect } from "react";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, UserInfo } from "./styles";

import { ExplorerLogo } from "../../assets/ExplorerLogo";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");


  useEffect(() => {

  })

  return(
    <Container>
      <Header />
        <main>
          <ExplorerLogo size={150}/>

          <UserInfo>
            <h1>Olá, {name}</h1>
            <p>Para atualizar seu cadastro, altere as informações abaixo:</p>

            <form>
              <div className="input-wrapper">
                <Label title="Nome" />
                <Input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="input-wrapper">
                <Label title="Email" />
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="input-wrapper">
                <Label title="Senha nova" />
                <Input
                  type="password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                />
              </div>

              <div className="input-wrapper">
                <Label title="Senha antiga" />
                <Input
                  type="password"
                  value={oldPassword}
                  onChange={e => setOldPassword(e.target.value)}
                />
              </div>

              <Button title="Salvar Alterações" className="primary" />

            </form>
          </UserInfo>
          
        </main>
      <Footer />
    </Container>
  )
}