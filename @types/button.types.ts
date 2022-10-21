export type ButtonType = {
  variant:
    | 'primary'
    | 'primary-dark'
    | 'secondary'
    | 'tertiary'
    | 'primary-small'
    | 'secondary-small'
    | 'tertiary-small';

  text: string;
  iconLeft?: string | boolean;
  iconRight?: string | boolean;
  extraClasses?: string;
  icon?: string;
  textClasses?: string;
  onClick?: (any) => void;
};
