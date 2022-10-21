type PageHeaderModel = {
  title: string;
  icon?: string;
  link: string;
  textVariant:
    | 'small'
    | 'medium'
    | 'large'
    | 'small-bold'
    | 'medium-bold'
    | 'large-bold';
};
export default PageHeaderModel;
