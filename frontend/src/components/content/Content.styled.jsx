import styled from 'styled-components';
import { v } from '../../styles/variables';

export const SContent = styled.div`
  direction: ltr;
  flex: 1;
  padding: 2.5rem 2.5rem 1.5rem;
  overflow: hidden;

  @media (max-width: ${v.size.desktop}) {
    padding: 1.25rem;
  }
`;
