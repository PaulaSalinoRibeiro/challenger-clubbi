import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { ILocation } from '../../app/types';

import * as S from './styled';

export function LocationCard() {
  const { filtered } = useSelector((state: RootState) => state.ghibhi);
  
  return (
    <S.Container>
      {
        filtered.map((item: ILocation) => (
          <S.Card key={ item.id }>
            <S.Title>
              { item.name }
            </S.Title>
            <S.Features>
              <S.SubTitle>
                Caracteristicas:
              </S.SubTitle>
              <S.Climate>
                Clima: { item.climate }
              </S.Climate>
              <S.Terrain>
                Tipo de terreno: { item.terrain }
              </S.Terrain>
              <S.SurfaceWater>
                Água da superfície: { item.surfaceWater }
              </S.SurfaceWater>
            </S.Features>
          </S.Card>
        ))
      }
    </S.Container>
  );
};
