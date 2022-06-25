import { SButton, SButtonIcon, SButtonLabel } from './Button.styled';

const Button = ({
  children,
  onClick,
  txt,
  txtHover,
  bg,
  bgHover,
  size,
  icon,
}) => {
  return (
    <SButton
      onClick={onClick}
      txt={txt}
      txtHover={txtHover}
      bg={bg}
      bgHover={bgHover}
      size={size}
    >
      <SButtonIcon>{icon}</SButtonIcon>
      <SButtonLabel>{children}</SButtonLabel>
    </SButton>
  );
};
export default Button;
