import {
  DiscountIcon,
  FavoriteIcon,
  GiftIcon,
  HitIcon,
  WarrantyIcon,
} from '@/assets';
import './HoverIcons.scss';

const HoverIcons: React.FC = () => {
  return (
    <ul className='hover-icons'>
      <li>
        <FavoriteIcon />
      </li>
      <li>
        <WarrantyIcon />
      </li>
      <li>
        <DiscountIcon />
      </li>
      <li>
        <GiftIcon />
      </li>
      <li>
        <HitIcon />
      </li>
    </ul>
  );
};

export default HoverIcons;
