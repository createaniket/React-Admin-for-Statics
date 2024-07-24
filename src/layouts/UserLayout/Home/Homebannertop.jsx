import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../CarouselTemplate/templateimage';

const Homebannertop = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage 
            imageSrc="http://sportsgoodsindia.org/images/Home_Banner_5.jpg" 
            text="First slide" 
          />

        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage 
            imageSrc="http://sportsgoodsindia.org/images/Home_Banner_1.jpg" 
            text="Second slide" 
          />

        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage 
            imageSrc="http://sportsgoodsindia.org/images/Home_Banner_3.jpg" 
            text="Third slide" 
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Homebannertop;
