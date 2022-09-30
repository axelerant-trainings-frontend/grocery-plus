type textType = {
  title: string;
  variant:
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'small-bold'
    | 'medium-bold'
    | 'large-bold'
    | 'xlarge-bold';
  extraClasses?: string;
};

export default textType;
