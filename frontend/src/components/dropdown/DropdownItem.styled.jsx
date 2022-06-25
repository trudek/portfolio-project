import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SDropdownItem = styled(NavLink)`
  display: flex;
  align-items: center;
  list-style: none;
  text-decoration: none;
  padding: 0 10px;
  color: ${({ state, theme }) => (state ? theme.color : theme.text5)};
  font-size: 13px;
  height: 30px;
  &:hover {
    color: ${({ state, theme }) => (state ? theme.text2 : theme.color)};
    cursor: pointer;
  }
`;

export const SDropdownItemIcon = styled.div`
  display: flex;
  align-items: center;
`;
export const SDropdownItemLabel = styled.div`
  margin-left: 5px;
`;
