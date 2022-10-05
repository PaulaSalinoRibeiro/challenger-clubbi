import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.background.secondary};
  border-radius: 50%;
  border: none;
  box-shadow: ${({ theme }) => theme.shadow.secondary};
  height: 4.5rem;
  width: 4.5rem;
`;