import styled from 'styled-components';

export const SPage404 = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 335px;
  height: 100%;
  color: ${({ theme }) => theme.text6};
`;

export const SPage404Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  gap: 10px;
`;

export const SPage404title = styled.h1`
  font-size: 80px;
  font-weight: 500;
  margin-bottom: -25px;
`;

export const SPage404p = styled.p`
  font-size: ${(props) => (props.bold ? '24px' : '18px')};
  font-weight: ${(props) => (props.bold ? '500' : 'normal')};
  text-align: center;
`;
