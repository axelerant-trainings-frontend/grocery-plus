export type ButtonType = {
  variant: string;
  text: string;
  iconLeft?: string | boolean;
  iconRight?: string | boolean;
  extraClasses?: string;
  iconClasses?: string;
  textClasses?: string;
  onClick?: () => void;
};
