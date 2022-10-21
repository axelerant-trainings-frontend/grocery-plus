type InputModel = {
  label?: string;
  variant: 'text' | 'number' | 'password' | 'date';
  placeholder?: string;
  icon?: string;
  extraClasses?: string;
};

export default InputModel;
