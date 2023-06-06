import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { Container, DishInfo } from "./styles";

import { api } from "../../services/api";

import { useCart } from "../../hooks/cart";

import { Button } from "../Button";
import { Stepper } from "../Stepper";

import { IoMdHeartEmpty } from 'react-icons/io'
import { IoMdHeart } from 'react-icons/io'

export function CardUser({ dish, nav, ...rest }) {
  const { addItemToCart } = useCart();

  // it will be changed
  const [quantity, setQuantity] = useState(1);

  const [isFavorite, setIsFavorite] = useState();
  const [idFavorite, setIdFavorite] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const priceInCurrency = dish.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`
  
  async function handleFavorite(event) {
    event.preventDefault();
    
    if (isFavorite) {
      await api.delete(`/favorites/${idFavorite}`)
        .then(() => {
          setIsLoading(true);
          setIsFavorite(false);
        })
        .catch((error) => {
          if (error.response) {
            return toast.error(error.response.data.message);
          } else {
            return toast.error("Erro ao criar o prato!");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      await api.post("/favorites/", { dish_id: dish.id })
        .then((id) => {
          setIsLoading(true);
          setIsFavorite(true);
          setIdFavorite(id.data);
        })
        .catch((error) => {
          if (error.response) {
            return toast.error(error.response.data.message);
          } else {
            return toast.error("Erro ao criar o prato!");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function handleStepperChange(newQuantity) {
    setQuantity(newQuantity)
  }

  useEffect(() => {
    async function fetchFavorite() {
      const response = await api.get('/favorites');
      
      const favorite = response.data.find(
        favorite => favorite.dish_id === dish.id
      )
      
      setIsFavorite(favorite ? true : false);
      setIdFavorite(favorite ? favorite.id : null);
    }

    fetchFavorite();
  }, [dish.id]);

  return(
    <Container {...rest}>
      <button disabled={isLoading} onClick={handleFavorite}>
        {isFavorite ? <IoMdHeart size={28} /> : <IoMdHeartEmpty size={28} />}
      </button>
      <DishInfo to={nav}>
        <img src={imageUrl} alt={`imagem de ${dish.name}`}/>
        <h3>{`${dish.name}`}</h3>
        <p>{dish.description}</p>
        <span>{priceInCurrency}</span>
      </DishInfo>
      <div className="add-cart">
        <Stepper 
          value={quantity}
          onChange={handleStepperChange} 
        />
        <Button 
          title="incluir" 
          className="primary" 
          onClick={() => addItemToCart(dish, imageUrl, quantity)}
        />
      </div>
    </Container>
  )
}

CardUser.propTypes = {
  dish: PropTypes.object.isRequired,
  nav: PropTypes.string.isRequired,
}