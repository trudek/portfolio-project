import styled from 'styled-components';
import { v } from '../../styles/variables';

export const SLayout = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

export const SMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 0;
  width: 100%;
  color: ${({ theme }) => theme.text5};

  @media (max-width: ${v.size.desktop}) {
    overflow-y: hidden;
    width: 100vw;
  }
`;
