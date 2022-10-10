export type ButtonType = {
  variant: 'primary' | 'secondary' | 'tertiary' |'primary-small' | 'secondary-small' |'tertiary-small';
  text: string;
  iconLeft?: string | boolean;
  iconRight?: string | boolean;
  extraClasses?: string;
  iconName?: string;
  textClasses?: string;
  onClick?: (any) => void;
};
