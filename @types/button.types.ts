export type ButtonType = {
  variant: string;
  text: string;
  iconLeft?: string | boolean;
  iconRight?: string | boolean;
  extraClasses?: string;
  iconName?: string;
  textClasses?: string;
  onClick?: () => void;
};
