import styled from 'styled-components';
import { v } from '../../styles/variables';

export const SPlayerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SPlayerDashboardRow = styled.div`
  display: flex;
  gap: 20px;
  min-width: 200px;

  @media (max-width: ${v.size.mobile}) {
    flex-direction: column;
  }
`;
