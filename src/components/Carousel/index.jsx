import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

import { useAuth } from "../../hooks/auth";
import { device } from "../../breakpoints/devices";

import { CardUser } from "../CardUser";
import { CardAdmin } from "../CardAdmin";

import PropTypes from "prop-types";

register();
export function Carousel({ items }) {
  const { user } = useAuth();
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      slidesPerView: 'auto',
      injectStyles: [
        `
        swiper-container {
          cursor: drab;
        }

        swiper-slide {
          width: 210px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          display: none;
          position: absolute;
          top: 22px;
          height: 100%; 
          width: 10rem;
          color: white;

          > svg {
            height: 27px;
          }
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
          swiper-slide {
            width: 304px;
          }

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
          spaceBetween: 8,
        },
        425: {
          spaceBetween: 16,
        },
        1024: {
          spaceBetween: 27,
        },
      }
    };

     Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []); 

  return(
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
                <CardUser nav={`/details/${item.id}`} dish={item} />
            }
          </swiper-slide>
        ))}
      </swiper-container>  
  )
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired
}
