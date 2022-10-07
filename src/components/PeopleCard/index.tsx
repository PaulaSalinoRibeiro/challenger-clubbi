import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { IPeople } from '../../app/types';

import * as S from './styled';

export function PeopleCard() {
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
              Idade: { item.age }
            </S.Age>
            <S.Gender>
              Genero: { item.gender }
            </S.Gender>
            <S.Features>
              <S.SubTitle>
                Caracteristicas físicas:
              </S.SubTitle>
              <S.Eyes>
                Cor dos olhos: { item.eyeColor }
              </S.Eyes>
              <S.Hair>
                Cor do cabelo: { item.hairColor }
              </S.Hair>
            </S.Features>
          </S.Card>  
        ))
      }
    </S.Container>
  );
};