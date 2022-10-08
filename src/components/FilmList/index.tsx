import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { IFilm } from '../../app/types';

import * as S from './styled';

export function FilmList(){
  const { filtered } = useSelector((state: RootState) => state.ghibhi);
  
  return (
    <S.Container>
      {
        filtered.map((item: IFilm) => (
          <S.Card 
            key={ item.id }
            data-testid={ item.id }
          >
            <S.CardImage>
              <S.Image
                src={ item.image }
                alt={ item.title }
              />
            </S.CardImage>
            <S.Features>
              <S.Title>
                { item.title }
              </S.Title>
              <S.Description>
                { item.description }
              </S.Description>
              <S.Director>
                Diretor: { item.director }
              </S.Director>
              <S.ReleaseDate>
                Lançamento: { item.release_date }
              </S.ReleaseDate>
            </S.Features>
          </S.Card>
        ))
      }
    </S.Container>
  );
};