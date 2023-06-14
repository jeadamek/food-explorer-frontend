import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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


export function EditDish() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");

  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const [ingredientClass, setIngredientClass] = useState("");

  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const { id } = useParams();
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [isLoadingRemove, setIsLoadingRemove] = useState(false);
  const navegate = useNavigate();

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
      return toast.warn("Digite um ingrediente antes de adicioná-lo")
    }

    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
    setIngredientClass("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleRemoveDish() {
    const confirm = window.confirm("Deseja realmente remover este prato?");

    if (confirm) {
      setIsLoadingRemove(true);
      await api.delete(`/dishes/${id}`);
      toast.success("Prato removido com sucesso!");

      setIsLoadingRemove(false);
      navegate("/");
    }
  }

  async function handleUpdate() {
    if(!image) {
      return toast.warn("Faça upload da foto do prato");
    } 
    
    if(!name || !category || !price || !description) {
      return toast.error("Todos os campos devem ser preenchidos");
    }

    if(ingredients.length == 0) {
      setIngredientClass("invalid");
      return toast.error("Adicione os ingredientes do prato");
    }

    if(newIngredient) {
      setIngredientClass("invalid");
      return toast.error(`Clique em "+" para adicionar o ingrediente: ${newIngredient}, ou deixe o campo vázio.`);
    }

    const formattedPrice = typeof price == 'string' ? parseFloat(price.replace(",", ".")) : price

    try {
      setIsLoadingUpdate(true);

      await api.put(`/dishes/${id}`, {
        name,
        category,
        price: formattedPrice,
        description,
        ingredients
      });

      if (imageFile) {
        const fileUploadForm = new FormData();

        fileUploadForm.append("image", imageFile);

        await api.patch(`/dishes/image/${id}`, fileUploadForm);
      }

      toast.success("Prato atualizado!");

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível atualizar o prato.");
      }
    } finally {
      setIsLoadingUpdate(false);
      navegate("/");
    }
  }

  function handleBack(){
    navegate(-1);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`);
      const { name, category, price, description, ingredients, image } = response.data;

      setName(name);
      setCategory(category);
      setPrice(price.toFixed(2));
      setDescription(description); 
      setIngredients(ingredients.map(ingredient => ingredient.name));
      setImage(image);
    }

    fetchDish();
  },[id])

  return(
    <Container>
      <Header />

      <main>
        <header>
        <TextButton title="voltar" icon={SlArrowLeft} onClick={handleBack}/>
          <h1>Editar Prato</h1>
        </header>

        <Form>
          <div className="wrapper">
            <div className="dish-image">
              <label htmlFor="image" >
                Imagem do prato
                <div>
                  <FiUpload size={26}/>
                  <span>{imageFile ? imageFile.name : image }</span>
                  <input 
                    type="file" 
                    id="image"
                    name="image"
                    onChange={e => setImageFile(e.target.files[0])}
                    required
                  />
                </div>
              </label>
            </div>

            <div className="dish-name">
              <Label htmlFor="name" title="Nome" />
              <Input 
                placeholder="Ex.: Salada Ceasar" 
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="dish-category">
              <Label htmlFor="category" title="Categoria" />
              <Select 
                name="category" 
                id="category" 
                options={options} 
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="wrapper">
            <div className="dish-ingredients">
              <span>Ingredientes</span>
                {
                  ingredients &&
                  <div>
                    {
                      ingredients.map((ingredient, index) => (
                          <DishItem 
                            key={String(index)}
                            value={ingredient} 
                            size={ingredient.length}
                            onClick={() => handleRemoveIngredient(ingredient)}
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
                }
            </div>

            <div className="dish-price">
              <Label htmlFor="price" title="Preço" />
              <CurrencyInput 
                type="text"
                placeholder="R$ 00,00" 
                id="price"
                value={price}
                onValueChange={(value) => setPrice(value)}
                required
              />
            </div>
          </div>
          
          <div className="dish-description">
            <Label htmlFor="description" title="Descrição" />
            <Textarea 
              id="description" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
              value={description}  
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          
          <div className="buttons">
            <Button 
              title="Excluir prato" 
              className="secondary"
              loading={isLoadingRemove}
              onClick={handleRemoveDish} 
            />
            <Button 
              title="Salvar alterações" 
              className="primary" 
              loading={isLoadingUpdate}
              onClick={handleUpdate}
            />
          </div>

        </Form>
      </main>

      <Footer />
    </Container>
  )
}