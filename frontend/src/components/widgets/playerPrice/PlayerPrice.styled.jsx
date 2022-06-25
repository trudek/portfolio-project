import styled from 'styled-components';
import { v } from '../../../styles/variables';

export const SPlayerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  /* height: 80px; */
  min-width: 280px;
  padding: 10px;
  background: ${({ theme }) => theme.bg4};
  border-radius: ${v.borderRadius};
  box-shadow: 0 0 ${v.xlSpacing} 0 ${({ theme }) => theme.shadow};
`;

export const SPlayerPriceLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SPlayerPriceRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SPlayerPriceValue = styled.p`
  color: ${({ theme }) => theme.text6};
  font-size: 1.2375rem;
  font-weight: 500;
`;
export const SPlayerPriceDescription = styled.p`
  font-size: 0.825rem;
`;

export const SPlayerPriceIcon = styled.span``;
