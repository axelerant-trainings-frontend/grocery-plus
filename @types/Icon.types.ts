type iconType = {
  icon: string;
  height: string;
  width: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
  variant:
    | 'charcoal'
    | 'white'
    | 'orange-light'
    | 'green-secondary'
    | 'red-primary'
    | 'blue-primary';
  extraClasses?: string;
};
export default iconType;
