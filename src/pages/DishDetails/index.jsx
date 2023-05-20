import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { Container, Content, DishPhoto, DishInfo} from './styles';

import { Ingredient } from '../../components/Ingredient';
import { TextButton } from '../../components/TextButton';
import { Stepper } from '../../components/Stepper';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { Receipt } from '../../assets/icons/Receipt';
import { SlArrowLeft } from "react-icons/sl";


export function DishDetails() {
  const { user } = useAuth();
  
  const [data, setData] = useState({});

  const [image, setImage] = useState("");

  const params = useParams();
  const navegate = useNavigate();

  // function formatCurrency(value) {
  //   const formatedValue = value.toLocaleString('pt-br', {minimumFractionDigits: 2});

  //   return formatedValue;
  // }

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
  },[params.id]);

  return(
    <Container>
      <Header orders={2}/>

      <main>
      <TextButton title="voltar" icon={SlArrowLeft} onClick={handleBack}/>

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

{/* 
            USER
            <div className="buttons">
              <Stepper />
              <Button title={`incluir ∙ R$ ${data.price}`} icon={Receipt} className="primary" />
            </div>

            {/* ADMIN */}
            {/* <div className="buttons">
              <Button title="Editar Prato" className="primary" />
            </div>
 */} 


            {
              user.isAdmin ?
              // ADMIN
              <div className="buttons">
                <Button title="Editar Prato" className="primary" />
              </div>
              :
              // USER
              <div className="buttons">
                <Stepper />
                <Button title={`incluir ∙ R$ ${data.price}`} icon={Receipt} className="primary" />
              </div>
            }
          </DishInfo>
          
        </Content>
      </main>

      <Footer />
    </Container>
  )
}