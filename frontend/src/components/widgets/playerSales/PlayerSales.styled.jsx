import styled from 'styled-components';
import { v } from '../../../styles/variables';

export const SPlayerSales = styled.div`
  display: flex;
  flex: 1;
  height: 400px;
  min-width: 280px;
  padding: 10px;
  background: ${({ theme }) => theme.bg4};
  border-radius: ${v.borderRadius};
  box-shadow: 0 0 ${v.xlSpacing} 0 ${({ theme }) => theme.shadow};
`;

export const SPlayerSalesLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const SPlayerSalesRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const SPlayerSalesHeader = styled.span`
  color: ${({ theme }) => theme.text6};
  font-weight: 500;
`;
