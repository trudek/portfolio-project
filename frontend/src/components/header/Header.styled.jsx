import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { v } from '../../styles/variables';

export const SHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: ${v.mdSpacing};
  border-bottom: 0;
  box-shadow: 0 0 ${v.xlSpacing} 0 ${({ theme }) => theme.shadow};
  font-size: 13px;
  color: ${({ theme }) => theme.text5};
  overflow: hidden;
`;

export const SNavIcon = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text5};
  font-size: 16px;

  &:hover {
    color: ${({ theme }) => theme.color};
    cursor: pointer;
  }
`;

export const SNavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${v.mdSpacing};

  transition: margin-right 0.4s ease-in-out;

  @media (max-width: ${v.size.mobile}) {
    margin-right: ${({ sidebar }) => (sidebar ? '0px' : `-${v.sidebarWidth}`)};
  }
`;

export const SNavNotif = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

export const SNavNotifIcon = styled.div`
  ${SNavNotif}:hover & {
    color: ${({ theme }) => theme.color};
  }
`;
export const SNavNotifCounter = styled.div`
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.color};
  border-radius: 50%;
  color: ${({ theme }) => theme.text2};
  display: flex;
  align-items: stretch;
  justify-content: center;
  font-size: 11px;
  position: absolute;
  top: -7px;
  right: -7px;
  transition: transform 0.2s ease-in-out;

  ${SNavNotif}:hover & {
    transform: translateY(-3px);
  }
`;

export const SNavLanguage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  padding-top: 7px;
`;
export const SNavUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
