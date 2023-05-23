import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Banner, Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Carousel } from "../../components/Carousel";

export function Home() {
  const [search, setSearch] = useState("");
  const [mealCategory, setMealCategory] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);
  const [dessertCategory, setDessertCategory] = useState([]);

  function handleSearch(searchValue) {
    setSearch(searchValue)
  }

  
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${search}&ingredients=${search}`);
      const dishes = response.data;

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
      <Header onSearch={handleSearch}/>
      <main>
          
          <Banner>
            <div className="banner">
              <img src="/src/assets/banner.png" alt="Banner: foto de macarons de cores variadas, framboesas, mirtilos e folhas como se estivessem flutuando no ar" />

              <div className="banner-info">
                <div className="banner-title">
                  <h1>Sabores inigualáveis</h1>
                  <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                </div>
              </div>
            </div>
          </Banner>

        
        <section>
          <h2>Refeições</h2>
          <Carousel items={mealCategory} />
        </section>
        
        <section>
          <h2>Sobremesas</h2>
          <Carousel items={dessertCategory} />
        </section>

        <section>
          <h2>Bebidas</h2>
          <Carousel items={drinkCategory} />
        </section>

      </main>
      <Footer />
    </Container>
  )
}