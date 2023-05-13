import { FiUpload } from "react-icons/fi";
import { SlArrowLeft } from "react-icons/sl";
import { Container, Form } from "./styles";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Textarea } from "../../components/Textarea";
import { DishItem } from "../../components/DishItem";
import { TextButton } from "../../components/TextButton";
import { CurrencyInput } from "../../components/CurrencyInput";

// import arrowLeft from '../../assets/icons/caretLeft.svg';

export function EditDish() {

  const options = [
    { value: 'default', label: 'Selecione uma opção'},
    { value: 'refeicao', label: 'Refeição'},
    { value: 'sobremesa', label: 'Sobremesa'},
    { value: 'bebida', label: 'Bebida'},
  ];
  return(
    <Container>
      <Header />

      <main>
        <header>
          <TextButton title="voltar" icon={SlArrowLeft} />
          <h1>Editar Prato</h1>
        </header>

        <Form>
          <div className="wrapper">
            <div className="dish-image">
              <label>
                Imagem do prato
                <div>
                  <FiUpload size={24}/>
                  Selecionar Imagem
                  <input 
                    type="file" 
                    id="image"
                    name="image"
                  />
                </div>
              </label>
            </div>

            <div className="dish-name">
              <Label htmlFor="name" title="Nome" />
              <Input placeholder="Ex.: Salada Ceasar" id="name" />
            </div>
            
            <div className="dish-category">
              <Label htmlFor="category" title="Categoria" />
              <Select name="category" id="category" options={options} />
            </div>
          </div>

          <div className="wrapper">
            <div className="dish-ingredients">
              <span>Ingredientes</span>
              <div>
                <DishItem value="pão naan"/>
                <DishItem isNew placeholder="Adicionar"/>
              </div>
            </div>

            <div className="dish-price">
              <Label htmlFor="price" title="Preço" />
              <CurrencyInput 
                placeholder="R$ 00,00" 
                prefix="R$ "
                decimalsLimit={2}
                decimalSeparator=","
                groupSeparator="."
                id="price"
              />
            </div>
          </div>
          
          <div className="dish-description">
            <Label htmlFor="description" title="Descrição" />
            <Textarea id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </div>
          
          <div className="buttons">
            <Button title="Excluir prato" className="secondary" />
            <Button title="Salvar alterações" className="primary" />
          </div>

        </Form>
      </main>



      <Footer />
    </Container>
  )
}