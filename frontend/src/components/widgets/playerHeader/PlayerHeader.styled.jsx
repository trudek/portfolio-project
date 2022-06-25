import styled from 'styled-components';
import { v } from '../../../styles/variables';

export const SPlayerHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 880px;
  /* height: 95px; */
  padding: 10px;
  background: ${({ theme }) => theme.bg4};
  border-radius: ${v.borderRadius};
  box-shadow: 0 0 ${v.xlSpacing} 0 ${({ theme }) => theme.shadow};

  @media (max-width: ${v.size.mobile}) {
    min-width: 280px;
  }
`;

export const SPlayerHeaderName = styled.p`
  color: ${({ theme }) => theme.text6};
  font-size: 1.2375rem;
  font-weight: 500;
`;
export const SPlayerHeaderDescription = styled.p`
  font-size: 0.825rem;
  display: flex;
  align-items: center;
`;
