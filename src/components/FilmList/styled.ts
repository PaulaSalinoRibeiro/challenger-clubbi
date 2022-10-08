import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  box-shadow: ${({ theme }) => theme.shadow.secondary};
  padding: 4rem;
  margin: 2rem;
  width: 46rem;
`;

export const CardImage = styled.div`
  margin-right: 4rem;
`;

export const Image = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 16rem;
`;

export const Features = styled.div``;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;
  line-height: 1.6rem;
  font-size: 16px;
`;

export const Director = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;
  line-height: 1.6rem;
  font-size: 16px;
`;

export const ReleaseDate = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;
  line-height: 1.6rem;
  font-size: 16px;
`;
