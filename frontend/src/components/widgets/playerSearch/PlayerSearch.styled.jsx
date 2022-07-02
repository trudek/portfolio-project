import styled from 'styled-components';
import { v } from '../../../styles/variables';

export const SPlayerSearch = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 650px;
  /* max-height: 300px; */
  overflow: hidden;
  padding: 10px;
  background: ${({ theme }) => theme.bg4};
  border-radius: ${v.borderRadius};
  box-shadow: 0 0 ${v.xlSpacing} 0 ${({ theme }) => theme.shadow};
  @media (max-width: ${v.size.mobile}) {
    min-width: 280px;
  }
`;
