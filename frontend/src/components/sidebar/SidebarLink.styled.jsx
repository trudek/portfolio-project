import styled from 'styled-components';
import { v } from '../../styles/variables';
import { NavLink } from 'react-router-dom';

export const SLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-left: ${v.xlSpacing};
  list-style: none;
  text-decoration: none;
  color: ${({ state, theme }) => (state ? theme.text3 : theme.text4)};
  font-size: 13px;
  height: 45px;

  &:hover {
    color: ${({ state, theme }) => (state ? theme.text2 : theme.text3)};
    cursor: pointer;
  }
`;

export const SLinkIcon = styled.div`
  width: 25px;
  font-size: 16px;
`;

export const SLinkLabel = styled.span`
  flex: 1;
  margin-left: ${v.mdSpacing};
`;

export const SLinkNotification = styled.div`
  font-size: 10px;
  padding: calc(${v.xsmSpacing} / 2) ${v.xsmSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.text2};
  margin-right: ${v.xlSpacing};
`;

export const SSidebarDropdown = styled.div`
  max-height: ${({ subnav }) => (subnav ? '180px' : '0px')};
  transition: max-height 0.2s ease-in-out;
  overflow: hidden;
`;
export const SSidebarDropdownLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 58px;
  list-style: none;
  text-decoration: none;
  color: ${({ state, theme }) => (state ? theme.color : theme.text4)};
  font-size: 13px;
  height: 45px;

  &:hover {
    color: ${({ state, theme }) => (state ? theme.color : theme.text3)};
    cursor: pointer;
  }
`;
