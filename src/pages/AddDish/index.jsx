import { Container, Content } from "./styles";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Select } from "../../components/Select";
import { TextButton } from "../../components/TextButton";

import arrowLeft from '../../assets/icons/caretLeft.svg';
import { Label } from "../../components/Label";


export function AddDish() {

  const options = [
    { value: 'refeicao', label: 'Refeição' },
    { value: 'sobremesa', label: 'Sobremesa' },
    { value: 'bebida', label: 'Bebida' },
  ];
  return(
    <Container>
      <Header />

      <main>
        <header>
          <TextButton title="voltar" icon={arrowLeft} />
          <h1>Novo Prato</h1>
        </header>

        <Content>
          <Label htmlfor="imagem-prato" title="Imagem do prato" />
          <Input type="file" id="imagem-prato" />

          <Label htmlfor="nome-prato" title="Nome" />
          <Input placeholder="Ex.: Salada Ceasar" id="nome-prato" />

          <Label htmlfor="categoria-prato" title="Categoria" />
          <Select name="categoria-prato" id="categoria-prato" options={options} />

          </Content>
      </main>



      <Footer />
    </Container>
  )
}