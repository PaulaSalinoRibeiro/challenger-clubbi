import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.secondary};
  margin: 2rem;
  padding: 2rem;
  width: 16rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
`;

export const Age = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;
  font-size: 16px;
`;

export const Gender = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;
  font-size: 16px;
`;

export const Eyes = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;
  font-size: 16px;
`;

export const Hair = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;
  font-size: 16px;
`;
