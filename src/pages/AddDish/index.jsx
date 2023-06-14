import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";

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

import { FiUpload } from "react-icons/fi";
import { SlArrowLeft } from "react-icons/sl";

export function AddDish() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("default");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [nameClass, setNameClass] = useState("");
  const [priceClass, setPriceClass] = useState("");
  const [imageClass, setImageClass] = useState("");
  const [categoryClass, setCategoryClass] = useState("");
  const [descriptionClass, setDescriptionClass] = useState("");
  const [ingredientClass, setIngredientClass] = useState("");


  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const options = [
    { value: 'default', label: 'Selecione uma opção'},
    { value: 'refeição', label: 'Refeição'},
    { value: 'sobremesa', label: 'Sobremesa'},
    { value: 'bebida', label: 'Bebida'},
  ];

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handleNewIngredient();
    }
  }

  function handleNewIngredient() {
    if (!newIngredient) {
      return toast.error("Digite um ingrediente antes de adicioná-lo")
    }
    
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
    setIngredientClass("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleAddDish(event) {
    event.preventDefault();

    if(!image) {
      setImageClass("invalid");
      return toast.error("Faça upload da foto do prato");
    } 

    if (!name) {
      setNameClass("invalid");
      return toast.error("Nome do prato é obrigatório");
    }

    if (category == "default") {
      setCategoryClass("invalid");
      return toast.error("Categoria inválida");
    }

    if(ingredients.length == 0) {
      setIngredientClass("invalid");
      return toast.error("Adicione os ingredientes do prato");
    }

    if(newIngredient) {
      setIngredientClass("invalid");
      return toast.error(`Clique em "+" para adicionar o ingrediente: ${newIngredient}, ou deixe o campo vázio.`);
    }

    if (!price) {
      setPriceClass("invalid");
      return toast.error("Preço do prato é obrigatório");
    }

    if (!description) {
      setDescriptionClass("invalid");
      return toast.error("Descrição é obrigatória");
    }

    setIsLoading(true);

    const formData = new FormData();  
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);

    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ))

    await api.post("/dishes", formData)
      .then( () => {
        toast.success("Prato adicionado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          return toast.error(error.response.data.message);
        } else {
          return toast.error("Erro ao criar o prato!");
        }
      })
      .finally(() => {
        setIsLoading(false)
      }); 
  }

  function handleBack(){
    navigate(-1);
  }

  return(
    <Container>
      <Header />

      <main>
        <header>
          <TextButton title="voltar" icon={SlArrowLeft} onClick={handleBack}/>
          <h1>Adicionar Prato</h1>
        </header>

        <Form>
          <div className="wrapper">
            <div className="dish-image">
              <label>
                Imagem do prato
                <div className={imageClass ? imageClass : ""}>
                  <FiUpload size={24}/>
                  <span>{image ? image.name : "Selecionar Imagem"}</span>
                  <input 
                    type="file" 
                    id="image"
                    name="image"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                      setImageClass("");
                    }}
                  />
                </div>
              </label>
            </div>

            <div className="dish-name">
              <Label htmlFor="name" title="Nome" />
              <Input 
                placeholder="Ex.: Salada Ceasar" 
                id="name"
                validation={nameClass}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameClass("");
                }}
                autoFocus
              />
            </div>
            
            <div className="dish-category">
              <Label htmlFor="category" title="Categoria" />
              <Select 
                name="category" 
                id="category" 
                value={category}
                options={options}
                className={categoryClass}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setCategoryClass("");
                }}
              />
            </div>
          </div>

          <div className="wrapper">
            <div className="dish-ingredients">
              <span>Ingredientes</span>
              <div>
                {
                  ingredients.map((ingredient, index) => (
                    <DishItem
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                      size={ingredient.length}
                    />
                  ))
                }
                <DishItem 
                  isNew 
                  placeholder="Adicionar"
                  value={newIngredient}
                  size={9} 
                  validation={ingredientClass}
                  onChange={(e) => {
                    setNewIngredient(e.target.value);
                    setIngredientClass("");
                  }}
                  onClick={handleNewIngredient} 
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>

            <div className="dish-price">
              <Label htmlFor="price" title="Preço" />
              <CurrencyInput 
                type="text"
                placeholder="R$ 00,00" 
                prefix="R$ "
                decimalsLimit={2}
                decimalSeparator=","
                groupSeparator="."
                id="price"
                className={priceClass}
                onValueChange={(value) => {
                  const formattedValue = value.replace(',', '.');
                  const valueAsFloat = parseFloat(formattedValue);
                  setPrice(valueAsFloat);
                  setPriceClass("");
                }}
              />
            </div>
          </div>
          
          <div className="dish-description">
            <Label htmlFor="description" title="Descrição" />
            <Textarea 
              id="description" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
              className={descriptionClass}
              onChange={(e) => {
                setDescription(e.target.value);
                setDescriptionClass("");
              }}
            />
          </div>
          
          <Button 
            title="Salvar alterações" 
            className="primary" 
            loading={isLoading}
            onClick={handleAddDish}
          />

        </Form>
      </main>

      <Footer />
    </Container>
  )
}