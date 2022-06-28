import styled from 'styled-components';
import { v } from '../../../styles/variables';

export const SPlayerChart = styled.div`
  flex: 1;
  height: 500px;
  min-width: 280px;
  padding: 10px;
  background: ${({ theme }) => theme.bg4};
  border-radius: ${v.borderRadius};
  box-shadow: 0 0 ${v.xlSpacing} 0 ${({ theme }) => theme.shadow};
`;
