type HeadingModel = {
  title: string;
  variant:
    | 'small'
    | 'medium'
    | 'large'
    | 'small-bold'
    | 'medium-bold'
    | 'large-bold';
  extraClasses?: string;
  size: 1 | 2 | 3 | 4 | 5 | 6;
};

export default HeadingModel;
