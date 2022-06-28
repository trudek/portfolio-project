import { SFooter, SFooterCopyrights, SFooterLinks } from './Footer.styled';

const Footer = ({ sidebar }) => {
  return (
    <SFooter>
      <SFooterLinks></SFooterLinks>
      <SFooterCopyrights sidebar={sidebar}>
        &copy; {new Date().getFullYear()} - Damian Trutkowski
      </SFooterCopyrights>
    </SFooter>
  );
};
export default Footer;
