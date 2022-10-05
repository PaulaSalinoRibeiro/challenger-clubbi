import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.main};
  margin: 0 24%;
  width: 32%;
`;

export const Input = styled.input`
  padding: 8px 14px;
  width: 100%;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.background.main};
`;