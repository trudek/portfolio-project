import styled from 'styled-components';
import { v } from '../../styles/variables';

export const SFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  border-bottom: 0;
  background: ${({ theme }) => theme.bg3};
  border-top: 1px solid ${({ theme }) => theme.bg6};
  direction: ltr;
  padding: 0.875rem 1.25rem;
  font-size: 13px;
  color: ${({ theme }) => theme.text5};
  overflow: hidden;

  & > ul {
    margin-bottom: 0;
  }
`;

export const SFooterLinks = styled.div``;

export const SFooterCopyrights = styled.div`
  transition: margin-right 0.4s ease-in-out;

  @media (max-width: ${v.size.mobile}) {
    margin-right: ${({ sidebar }) => (sidebar ? '0px' : `-${v.sidebarWidth}`)};
  }
`;
