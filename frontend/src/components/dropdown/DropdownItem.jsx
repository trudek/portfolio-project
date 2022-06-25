import {
  SDropdownItem,
  SDropdownItemIcon,
  SDropdownItemLabel,
} from './DropdownItem.styled';

const DropdownItem = ({ icon, label, click }) => {
  return (
    <SDropdownItem to="#" onClick={click}>
      <SDropdownItemIcon>{icon}</SDropdownItemIcon>
      <SDropdownItemLabel>{label}</SDropdownItemLabel>
    </SDropdownItem>
  );
};
export default DropdownItem;
