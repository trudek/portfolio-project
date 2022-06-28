import styled from 'styled-components';
import { v } from '../../styles/variables';

export const SSignin = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 335px;
`;

export const SSigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  color: ${({ theme }) => theme.text6};
`;

export const SSigninForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: blue;
  padding: 30px;
  margin: 15px;
  background: ${({ theme }) => theme.bg4};
  border-radius: ${v.borderRadius};
  box-shadow: 0 0 ${v.xlSpacing} 0 ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text5};
`;
