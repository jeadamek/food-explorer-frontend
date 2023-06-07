import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import { api } from '../../services/api';

import { Container, Content, DishPhoto, DishInfo} from './styles';

import { Ingredient } from '../../components/Ingredient';
import { TextButton } from '../../components/TextButton';
import { Stepper } from '../../components/Stepper';
import { Header } from '../../components/Header';
import { ButtonLink } from '../../components/ButtonLink';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { Receipt } from '../../assets/icons/Receipt';
import { SlArrowLeft } from "react-icons/sl";


export function DishDetails() {
  const { user } = useAuth();
  const { addItemToCart, cartItems }  = useCart();

  const [data, setData] = useState({});
  const [image, setImage] = useState("");
  const [dishQuantity, setDishQuantity] = useState(1);

  const params = useParams();
  const navegate = useNavigate();


  function handleStepperChange(newQuantity) {
    setDishQuantity(newQuantity)
  }

  function handlePrice() {
    const price = data.price * dishQuantity;
    const currency = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return currency;
  }

  function handleBack(){
    navegate(-1);
  }

  useEffect(() => {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data);
      
      const imageUrl = `${api.defaults.baseURL}/files/${response.data.image}`
      setImage(imageUrl)
    }

    fetchDish();
  },[params.id, cartItems]);

  return(
    <Container>
      <Header />

      <main>
      <TextButton 
        title="voltar" 
        icon={SlArrowLeft} 
        onClick={handleBack}
      />

        <Content> 
          <DishPhoto>
            <img src={image} alt={`Foto de ${data.name}`} />
          </DishPhoto>  

          <DishInfo>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            
            {
              data.ingredients &&
              <div className="ingredients">
                {
                  data.ingredients.map(ingredient => (
                    <Ingredient 
                      key={String(ingredient.id)}
                      title={ingredient.name}
                    />
                  ))
                }
              </div>
            }

            {
              user.isAdmin ?
              // ADMIN
              <div className="buttons">
                <ButtonLink 
                  to={`/edit/${data.id}`}
                  title="Editar Prato" 
                  className="primary" 
                />
              </div>
              :
              // USER
              <div className="buttons">
                <Stepper 
                  value={dishQuantity} 
                  onChange={handleStepperChange} 
                />
                <Button 
                  title={`incluir ∙ ${handlePrice()}`} 
                  icon={Receipt} 
                  className="primary" 
                  onClick={() => addItemToCart(data, image, dishQuantity)}  
                />
              </div>
            }
          </DishInfo>
          
        </Content>
      </main>

      <Footer />
    </Container>
  )
}