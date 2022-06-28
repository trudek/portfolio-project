import styled from 'styled-components';
import { v } from '../../../styles/variables';

export const SPlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  flex: 1;
  min-width: 280px;
  height: 500px;
  padding: 10px;
  background: ${({ theme }) => theme.bg4};
  border-radius: ${v.borderRadius};
  box-shadow: 0 0 ${v.xlSpacing} 0 ${({ theme }) => theme.shadow};
`;

export const SPlayerInfoRow = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const SPlayerInfoDescription = styled.span`
  color: ${({ theme }) => theme.text6};
  font-weight: 500;
  width: 50%;
`;

export const SPlayerInfoValue = styled.span`
  margin-left: 20px;
  width: 50%;
`;
