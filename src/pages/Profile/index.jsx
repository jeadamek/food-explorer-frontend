import { Container, UserInfo } from "./styles";

import { ExplorerLogo } from "../../assets/ExplorerLogo";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Profile() {
  return(
    <Container>
      <Header />
        <main>
          <ExplorerLogo height={150}/>

          <UserInfo>
            <h1>Olá, fulano</h1>
            <p>Para atualizar seu cadastro, altere as informações abaixo:</p>

            <form>
              <div className="input-wrapper">
                <Label title="Nome" />
                <Input
                  value="UserName"
                />
              </div>

              <div className="input-wrapper">
                <Label title="Email" />
                <Input
                  value="UserEmail"
                />
              </div>

              <div className="input-wrapper">
                <Label title="Senha nova" />
                <Input
                  value="UserNewPassword"
                />
              </div>

              <div className="input-wrapper">
                <Label title="Senha antiga" />
                <Input
                  value="UserOldPassword"
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