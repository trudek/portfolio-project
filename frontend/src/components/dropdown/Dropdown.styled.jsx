import styled from 'styled-components';
import { v } from '../../styles/variables';

export const SDropdown = styled.div`
  position: absolute;
  top: 50px;
  padding: 5px 0;
  background: ${({ theme }) => theme.bg4};
  border: 1px solid ${({ theme }) => theme.color3};
  border-radius: ${v.borderRadius};
`;
