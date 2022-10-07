import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { ILocation } from '../../app/types';

import * as S from './styled';

export function LocationList() {
  const { filtered } = useSelector((state: RootState) => state.ghibhi);
  
  return (
    <S.Container>
      {
        filtered.map((item: ILocation) => (
          <S.Card key={ item.id }>
            <S.Title>
              { item.name }
            </S.Title>
            <S.Climate>
              📌 Clima: { item.climate }
            </S.Climate>
            <S.Terrain>
              📌 Tipo de terreno: { item.terrain }
            </S.Terrain>
            <S.SurfaceWater>
              📌 Água da superfície: { item.surface_water }
            </S.SurfaceWater>
          </S.Card>
        ))
      }
    </S.Container>
  );
};
