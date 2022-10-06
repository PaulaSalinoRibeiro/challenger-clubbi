import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { ILocation } from '../../app/types';


export function LocationCard() {
  const { filtered } = useSelector((state: RootState) => state.gibi);
  console.log(filtered)
  return (
    <div>
      {
        filtered.map((item: ILocation) => (
          <div key={ item.id }>
            <h2>{ item.name }</h2>
            <div>
              <p>Caracteristicas</p>
              <p>Clima: { item.climate }</p>
              <p>Tipo de terreno: { item.terrain }</p>
              <p>água da superfície: { item.surfaceWater }</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}