import { Container, Content, DishPhoto, DishInfo} from './styles';

import { Ingredient } from '../../components/Ingredient';
import { TextButton } from '../../components/TextButton';
import { Stepper } from '../../components/Stepper';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import receipt from '../../assets/icons/receipt.svg';
import arrowLeft from '../../assets/icons/caretLeft.svg';

export function DishDetails() {
  return(
    <Container>
      <Header orders={2}/>

      <main>
        <TextButton title="voltar" icon={arrowLeft} />

        <Content> 
          <DishPhoto>
            <img src='../../../public/Salada Ravanello.png' alt="Foto do prato"/>
          </DishPhoto>  

          <DishInfo>
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

            <div className="ingredients">
              <Ingredient title="alface"/>
              <Ingredient title="cebola"/>
              <Ingredient title="pão naan"/>
              <Ingredient title="pepino"/>
              <Ingredient title="rabanete"/>
              <Ingredient title="tomate"/>
            </div>

            {/* USER */}
            <div className="buttons">
              <Stepper />
              <Button title="pedir ∙ R$ 25,00" icon={receipt} className="primary" />
            </div>

            {/* ADMIN */}
            <div className="buttons">
              <Button title="Editar Prato" className="primary" />
            </div>
          </DishInfo>
          
        </Content>
      </main>

      <Footer />
    </Container>
  )
}