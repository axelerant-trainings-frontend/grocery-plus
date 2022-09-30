type headingType = {
  title: string;
  variant:
    | 'small'
    | 'medium'
    | 'large'
    | 'small-bold'
    | 'medium-bold'
    | 'large-bold';
  extraClasses?: string;
};

export default headingType;
