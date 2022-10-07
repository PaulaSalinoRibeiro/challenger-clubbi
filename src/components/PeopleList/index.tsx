import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { IPeople } from '../../app/types';

import * as S from './styled';

export function PeopleList() {
  const { filtered } = useSelector((state: RootState) => state.ghibhi);

  return(
    <S.Container>
      {
        filtered.map((item: IPeople) => (
          <S.Card key={ item.id }>
            <S.Title>
              { item.name }
            </S.Title>
            <S.Age>
              📌 Idade: { item.age }
            </S.Age>
            <S.Gender>
              📌 Genero: { item.gender }
            </S.Gender>
            <S.Eyes>
              📌 Olhos: { item.eye_color }
            </S.Eyes>
            <S.Hair>
              📌 Cabelo: { item.hair_color }
            </S.Hair>
          </S.Card>  
        ))
      }
    </S.Container>
  );
};