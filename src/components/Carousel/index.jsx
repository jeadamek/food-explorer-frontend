import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';


import { useAuth } from "../../hooks/auth";
import { device } from "../../breakpoints/devices";


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
      injectStyles: [
        `
        swiper-container {
          cursor: drab;
        }

        .swiper-button-next,
        .swiper-button-prev {
          display: none;
          position: absolute;
          top: 22px;
          height: 100%; 
          width: 10rem;
          color: white;
        }

        .swiper-button-next {
          right: 0;
          background: linear-gradient(90deg, transparent, #000A0F);
          justify-content: flex-end;
          padding-right: 1.6rem;
        }

        .swiper-button-prev {
          left: 0;
          background: linear-gradient(90deg, #000A0F, transparent);
          justify-content: flex-start;
          padding-left: 1.6rem;
        }

        @media ${device.laptop} {
          .swiper-button-next,
          .swiper-button-prev {
            display: flex;
          }

          .swiper-button-disabled {
            display: none;
          }
        }
      `,
      ],
      breakpoints: {
        320: {
          slidesPerView: 1.60,
          spaceBetween: 8,
        },
        375: {
          slidesPerView: 1.60,
          spaceBetween: 8,
        },
        425: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 27,
        },
        1440: {
          slidesPerView: 3.5,
          spaceBetween: 27,
        }
      }
    };

     Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []); 

  return(
    <Container>
      <swiper-container
        ref={swiperRef}
        init="false"
        pagination="false"
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
