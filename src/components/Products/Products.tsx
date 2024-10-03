import Slider from 'react-slick';
import { useRef } from 'react';
import './Products.scss';
import { LeftArrowIcon, RightArrowIcon } from '@/assets';
import { products } from '@/data/mockData';
import { Button, Card } from '@/components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '@/config/sliderConfig';

const Products: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className='products'>
      <header className='products__header'>ХИТЫ ПРОДАЖ</header>
      <Slider {...settings} ref={sliderRef} className='test'>
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </Slider>
      <div className='products__controls'>
        <div className='products__controls-arrows'>
          <LeftArrowIcon onClick={handlePrev} />
          <RightArrowIcon onClick={handleNext} />
        </div>
        <Button title='Смотреть все' className='products__controls-button' />
      </div>
    </section>
  );
};

export default Products;
