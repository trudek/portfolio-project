import styled from 'styled-components';
import { v } from '../../styles/variables';

export const SButton = styled.button`
  display: flex;
  border-radius: ${v.borderRadius};
  border: none;
  cursor: pointer;
  font-size: ${({ size }) => size || '13'}px;
  padding: 10px 50px;
  background-color: ${({ bg, theme }) => bg || theme.color};
  color: ${({ txt, theme }) => txt || theme.text2};
  margin: ${v.smSpacing};

  &:hover {
    background-color: ${({ bgHover, theme }) => bgHover || theme.color2};
  }
`;

export const SButtonIcon = styled.div``;
export const SButtonLabel = styled.div`
  margin-left: 10px;
`;
