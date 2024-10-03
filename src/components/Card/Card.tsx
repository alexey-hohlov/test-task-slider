import './Card.scss';
import { IProduct } from '@/types/productTypes';
import {
  HeartIcon,
  MudTireIcon,
  RatingIcon,
  StuddedTireIcon,
  WinterTireIcon,
} from '@/assets';
import { Button, Counter, HoverIcons } from '@/components';
import { formatPrice } from '@/utils/formatPrice';

interface Props {
  product: IProduct;
}

const Card: React.FC<Props> = ({ product }) => {
  return (
    <li className='card'>
      <div className='card__photo'>
        <img src={product.image} alt='product-image' />
        <HoverIcons />
      </div>
      <div className='card__info'>
        <div className='card__info-details'>
          <span className='card__info-details-name'>{product.name}</span>
          <div className='card__info-details-rating'>
            <RatingIcon />
            <span>{product.comments} отзывов</span>
          </div>
          <ul className='card__info-details-category'>
            <li>
              <WinterTireIcon />
              Зимняя
            </li>
            <li>
              <StuddedTireIcon />
              Шипованная
            </li>
            <li>
              <MudTireIcon />
              Грязевая
            </li>
          </ul>
        </div>
        <div className='card__info-controls'>
          <div className='card__info-controls-price'>
            <span>{formatPrice(product.oldPrice)}</span>
            {formatPrice(product.price)}
          </div>
          <div className='card__info-controls-buttons'>
            <Counter className='card__info-controls-buttons-counter' />
            <Button
              title='В корзину'
              className='card__info-controls-buttons-cart-button'
            />
            <HeartIcon />
          </div>
          <Button
            className='card__info-controls-buttons-buy-button'
            title='Купить в 1 клик'
          />
        </div>
      </div>
    </li>
  );
};

export default Card;
