import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';


import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";

import { CardUser } from "../CardUser";
import { CardAdmin } from "../CardAdmin";

import PropTypes from "prop-types";

// import { SlArrowLeft } from "react-icons/sl";
// import { SlArrowRight } from "react-icons/sl";

register();
export function Carousel({ items }) {
  const { user } = useAuth();
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
          background: linear-gradient(to left, #091E26 0%, #00131C 100%);
          color: white;
        }
      `,
      ],
    };

     Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []); 

  return(
    <Container>
      <swiper-container
        ref={swiperRef}
        init="false"
        slides-per-view="3.5"
      >
        {items.map(item => (
          <swiper-slide key={item.id}>
            {
              user.isAdmin ?
                <CardAdmin to={`/details/${item.id}`} dish={item} />
              : 
                <CardUser to={`/details/${item.id}`} dish={item} />
            }
          </swiper-slide>
        ))}
      </swiper-container>  
    </Container>
  )
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired
}
