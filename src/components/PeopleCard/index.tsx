import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { IPeople } from '../../app/types';

export function PeopleCard() {
  const { filtered } = useSelector((state: RootState) => state.gibi);

  return(
    <div>
      {
        filtered.map((item: IPeople) => (
          <div key={ item.id }>
            <h2>{ item.name }</h2>
            <p>{ item.age }</p>
            <p>{ item.gender }</p>
            <div>
              <p>Caracteristicas físicas:</p>
              <p>Cor dos olhos: { item.eyeColor }</p>
              <p>Cor do cabelo { item.hairColor }</p>
            </div>
          </div>  
        ))
      }
    </div>
  );
};