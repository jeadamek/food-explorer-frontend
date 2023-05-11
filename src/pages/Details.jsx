import { Header } from '../components/Header';
import { TextButton } from '../components/TextButton';
import { Ingredient } from '../components/Ingredient';
import { Stepper } from '../components/Stepper';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

import receipt from '../assets/icons/receipt.svg';
import arrowLeft from '../assets/icons/caretLeft.svg';

export function Details() {
  return(
    <>
      <Header />
      <TextButton title="voltar" icon={arrowLeft} />
      <Ingredient title="alface"/>
      <Stepper />
      <Button title="pedir ∙ R$ 25,00" icon={receipt} className="primary" />
      <Footer />
    </>
  )
}