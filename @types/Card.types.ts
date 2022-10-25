type cardType = {
  cardImage: string;
  cardLabel: string;
  originalPrice?: number;
  finalPrice?: number;
  discountAmount?: number;
  variant?: 'primary' | 'secondary' | 'tertiarySearch' | 'tertiaryBag';
  classes?: string;
  extraClasses?: string;
  cartIncrement?: Function;
  count?: number;
  cartDecrement?: Function;
};
export default cardType;
