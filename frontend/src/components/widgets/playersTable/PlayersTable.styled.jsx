import styled from 'styled-components';
import { v } from '../../../styles/variables';

export const SPlayersTable = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 880px;
  height: 400px;
  padding: 10px;
  background: ${({ theme }) => theme.bg4};
  border-radius: ${v.borderRadius};
  box-shadow: 0 0 ${v.xlSpacing} 0 ${({ theme }) => theme.shadow};

  @media (max-width: ${v.size.mobile}) {
    min-width: 280px;
  }
`;
