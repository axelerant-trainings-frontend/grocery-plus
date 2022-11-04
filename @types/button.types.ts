export type ButtonType = {
  variant: 'primary' | 'secondary' | 'tertiary' |'primary-small' | 'secondary-small' |'tertiary-small';
  text: string;
  iconLeft?: string;
  iconRight?: string;
  extraClasses?: string;
  textClasses?: string;
  onClick?: (any) => void;
};
