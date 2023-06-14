import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { api } from "../../services/api";

import { Banner, Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { Carousel } from "../../components/Carousel";

import BannerImg from "../../assets/banner.png";

export function Home() {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('search');

  const [search, setSearch] = useState(searchParam ? searchParam : "");
  const [mealCategory, setMealCategory] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);
  const [dessertCategory, setDessertCategory] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  function handleSearch(searchValue) {
    setSearch(searchValue)
  }

  useEffect(() => {
    setSearch(searchParam || '');
  }, [searchParam]);

  useEffect(() => {
    async function fetchDishes() {
      setIsLoading(true);
      const response = await api.get(`/dishes?search=${search}`);
      const dishes = response.data;

      setIsLoading(false);

      const mealItems = dishes.filter((dish) => {
        return dish.category === 'refeição';
      });

      const dessertItems = dishes.filter((dish) => {
        return dish.category === 'sobremesa';
      });

      const drinkItems = dishes.filter((dish) => {
        return dish.category === 'bebida';
      });

      setMealCategory(mealItems);
      setDessertCategory(dessertItems);
      setDrinkCategory(drinkItems);
    }

    fetchDishes();
  },[search]);

  return(
    <Container>
      <Header onSearch={handleSearch} />
      <main>
          {
            !search &&
            (
              <Banner>
                <div className="banner">
                  <img src={BannerImg} alt="Banner: foto de macarons de cores variadas, framboesas, mirtilos e folhas como se estivessem flutuando no ar" />
    
                  <div className="banner-info">
                    <div className="banner-title">
                      <h1>Sabores inigualáveis</h1>
                      <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                    </div>
                  </div>
                </div>
              </Banner>
            )
          }

        {
          mealCategory.length !== 0 &&
          (
            <section>
              <h2>Refeições</h2>
              <Carousel items={mealCategory} />
            </section>
          )
        }

        {
          dessertCategory.length !== 0 &&
          (
            <section>
              <h2>Sobremesas</h2>
              <Carousel items={dessertCategory} />
            </section>
          )
        }

        {
          drinkCategory.length !== 0 &&
          (
            <section>
            <h2>Bebidas</h2>
            <Carousel items={drinkCategory} />
          </section>
          )
        }
        
        {
          drinkCategory.length === 0 && 
          mealCategory.length === 0 && 
          dessertCategory.length === 0 &&
          (
            isLoading ? 
            <div className="loading-wrapper"> 
              <Loading className="loading" />
            </div> 
            : 
            <p className="dish-not-found">Nenhum prato encontrado.</p>
          )
        }

      </main>
      <Footer />
    </Container>
  )
}