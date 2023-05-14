import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { Container, PrevButton, NextButton } from "./styles";

import { CardUser } from "../CardUser";
// import { CardAdmin } from "../CardAdmin";

import PropTypes from "prop-types";

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";


export function Carousel({ items }) {
  const carousel = useRef();
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    setCarouselWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [carouselWidth]);

  return(
    <Container>
      
      <motion.div 
        ref={carousel}
        className="wrapper-items" 
        whileTap={{ cursor: "grabbing" }} 
        drag="x"
        dragConstraints={{ right: 0, left: - carouselWidth}}
      >
        {items.map(item => (
          <motion.div className="item" key={item.id}>
            <CardUser dish={item} />
          </motion.div>
        ))}
      </motion.div>

      <PrevButton><SlArrowLeft size={28} /></PrevButton>
      <NextButton><SlArrowRight size={28} /></NextButton>

    </Container>  
  )
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired
}