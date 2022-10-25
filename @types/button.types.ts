export type ButtonType = {
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'primary-small'
    | 'secondary-small'
    | 'tertiary-small'
    | 'primary-dark';
  text: string;
  iconPosition?: 'left' | 'right';
  extraClasses?: string;
  icon?: string;
  textClasses?: string;
  onClick?: (any) => void;
};
