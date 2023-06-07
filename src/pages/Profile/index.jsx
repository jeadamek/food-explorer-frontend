import { useState } from "react";

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

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    const userUpdated = Object.assign(user, updated);
    
    await updateProfile({ user: userUpdated });
  }

  return(
    <Container>
      <Header />
        <main>
          <ExplorerLogo size={150}/>

          <UserInfo>
            <h1>Olá, {user.name}</h1>
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
                <Label title="Senha atual" />
                <Input
                  type="password"
                  value={oldPassword}
                  onChange={e => setOldPassword(e.target.value)}
                />
              </div>

              <div className="input-wrapper">
                <Label title="Nova Senha" />
                <Input
                  type="password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                />
              </div>

              <Button 
                title="Salvar Alterações" 
                className="primary"
                onClick={handleUpdate}
              />

            </form>
          </UserInfo>
          
        </main>
      <Footer />
    </Container>
  )
}