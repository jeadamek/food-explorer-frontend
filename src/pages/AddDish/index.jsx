import { Container, Form } from "./styles";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Textarea } from "../../components/Textarea";
import { Ingredient } from "../../components/Ingredient";
import { TextButton } from "../../components/TextButton";
import { CurrencyInput } from "../../components/CurrencyInput";

import arrowLeft from '../../assets/icons/caretLeft.svg';


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

        <Form>
          <Label htmlFor="imagem-prato" title="Imagem do prato" />
          <Input type="file" id="imagem-prato" />

          <Label htmlFor="nome-prato" title="Nome" />
          <Input placeholder="Ex.: Salada Ceasar" id="nome-prato" />

          <Label htmlFor="categoria-prato" title="Categoria" />
          <Select name="categoria-prato" id="categoria-prato" options={options} />

          <div className="ingredients">
            <span>Ingredientes</span>
            <div>
              <Ingredient title="pão naan"/>
              <Ingredient title="pão"/>
              <Ingredient title="pão"/>
              <Ingredient title="pão naan"/>
              <Ingredient title="pão naan"/>
              <Ingredient title="pão naan"/>
              <Ingredient title="pão naan"/>
            </div>
          </div>


          <Label htmlFor="preco-prato" title="Preço" />
          <CurrencyInput 
            placeholder="R$ 00,00" 
            prefix="R$ "
            decimalsLimit={2}
            decimalSeparator=","
            groupSeparator="."
            id="preco-prato" />

          <Label htmlFor="descricao-prato" title="Descrição" />
          <Textarea id="descricao-prato" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          
          <Button title="Salvar alterações" className="primary" />

        </Form>
      </main>



      <Footer />
    </Container>
  )
}