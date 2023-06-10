import { useEffect } from "react";

import { Container } from "./styles";

import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Payment } from "../../components/Payment";
import { useState } from "react";

export function Checkout() {
  const [isMobile, setIsMobile] = useState(false);
  const [showCart, setShowCart] = useState(true);

  function handleAdvance() {
    setShowCart(false);
  }

  useEffect(() => {
    const checkMobile = () => {
      const mobileWidth = 1024; // mobile screen size
      const isMobile = window.innerWidth < mobileWidth;
      setIsMobile(isMobile);
    };

    checkMobile();

    const resizeListener = () => {
      checkMobile();
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return(
    <Container>
      <Header />

      <main>
        { isMobile ? (
          showCart ? (
            <Cart onAdvance={handleAdvance} />
          ) : (
            <Payment />
          )
        ) : (
            <>
              <Cart />
              <Payment />
            </>
          )
        }
        </main>


      <Footer />
    </Container>
  )
}