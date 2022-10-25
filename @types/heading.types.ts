type HeadingModel = {
  title: string | number;
  variant:
    | 'small'
    | 'medium'
    | 'large'
    | 'small-bold'
    | 'medium-bold'
    | 'large-bold'
    | 'small-medium'
    | 'medium-medium'
    | 'large-medium';
  extraClasses?: string;
  size: 1 | 2 | 3 | 4 | 5 | 6;
};

export default HeadingModel;
