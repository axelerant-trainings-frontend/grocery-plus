export type NavbarLink = {
  title: string;
  link: string;
  icon: string;
  linkTitle: string;
};
type NavbarModel = {
  links?: NavbarLink[];
};
export default NavbarModel;
