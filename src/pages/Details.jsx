import { TextButton } from '../components/TextButton';
import { TagIngredient } from '../components/TagIngredient';
import { Stepper } from '../components/Stepper';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

import receipt from '../assets/icons/receipt.svg';
import arrowLeft from '../assets/icons/caretLeft.svg';

export function Details() {
  return(
    <>
      <TextButton title="voltar" icon={arrowLeft} />
      <TagIngredient title="alface"/>
      <Stepper />
      <Button title="pedir ∙ R$ 25,00" icon={receipt}/>
      <Footer />
    </>
  )
}