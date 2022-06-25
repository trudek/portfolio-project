import styled from 'styled-components';
import { btnReset, v } from '../../styles/variables';

export const SSidebarWrapper = styled.nav`
  background-color: ${({ theme }) => theme.bg2};
  width: ${v.sidebarWidth};
  min-height: 100vh;
  margin-left: ${({ sidebar }) => (sidebar ? '0px' : `-${v.sidebarWidth}`)};
  transition: margin-left 0.4s ease-in-out;

  @media (max-width: ${v.size.desktop}) {
    margin-left: ${({ sidebar }) => (sidebar ? `-${v.sidebarWidth}` : '0px')};
  }
`;

export const SSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  /* width: ${v.sidebarWidth}; */
  height: 100vh;
  color: ${({ theme }) => theme.text2};
`;

export const SLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${v.lgSpacing};
  cursor: pointer;

  img {
    width: 120px;
    height: auto;
  }
`;

export const SNav = styled.div`
  flex: 1;
  align-self: flex-start;
  width: 100%;
`;
export const SLogout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;
export const STheme = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0 30px;
`;

export const SThemeLabel = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.text4};
`;
export const SThemeToggler = styled.button`
  ${btnReset}
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) => (!isActive ? theme.bg5 : theme.color)};
  position: relative;
`;

export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc() (100%-10px-1px);
  border-radius: 50px;
  background: ${({ theme }) => theme.text3};
`;
