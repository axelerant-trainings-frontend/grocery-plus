type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
type cardType = {
  cardImage: string | StaticImageData;
  cardLabel: string;
  originalPrice?: number;
  finalPrice?: number;
  discountAmount?: number;
  variant: 'primary' | 'secondary' | 'tertiarySearch' | 'tertiaryBag';
  extraClasses?: string;
  cartIncrement?: Function;
  count?: number;
  cartDecrement?: Function;
};
export default cardType;
