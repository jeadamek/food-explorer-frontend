import { Stepper } from '../components/Stepper';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

import receipt from '../assets/icons/receipt.svg';

export function Details() {
  return(
    <>
      <Stepper />
      <Button title="pedir ∙ R$ 25,00" icon={receipt}/>
      <Footer />
    </>
  )
}