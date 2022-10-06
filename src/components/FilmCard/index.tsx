import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { IFilm } from '../../app/types';

import * as S from './styled';

export function FilmCard(){

  const { filtered } = useSelector((state: RootState) => state.gibi);
  
  return (
    <S.Container>
      {
        filtered.map((item: IFilm) => (
          <div key={ item.id }>
            <img 
              src={ item.image }
              alt={ item.title }
            />
            <div>
              <h2>{ item.title }</h2>
              <p>{ item.description }</p>
              <p>{ item.director }</p>
              <p>{ item.releaseDate }</p>
            </div>
          </div>
        ))
      }
    </S.Container>
  )
}