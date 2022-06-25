import { SFooter, SFooterCopyrights, SFooterLinks } from './Footer.styled';

const Footer = ({ sidebar }) => {
  return (
    <SFooter>
      <SFooterLinks></SFooterLinks>
      <SFooterCopyrights sidebar={sidebar}>
        &copy; 2022 - Damian Trutkowski
      </SFooterCopyrights>
    </SFooter>
  );
};
export default Footer;
