import { useDispatch } from 'react-redux'; 
import { setTypeList, setFilm, setLocation, setPeople } from '../../app/ghibhiSlice';
import { getAll } from '../../api';
import { IFilm, ILocation, IPeople } from '../../app/types';

import * as S from './styled';

interface Props {
  endpoint: 'films' | 'people' | 'locations',
  icon: any,
  typeList: 'filmList' | 'peopleList' | 'locationList',
};

const typesClickButton = {
  filmList: (films: IFilm[]) => setFilm(films),
  peopleList: (people: IPeople[]) => setPeople(people),
  locationList: (location: ILocation[]) => setLocation(location),
};

export function Button ({ endpoint, icon, typeList }: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTypeList(typeList));
    getAll(endpoint)
      .then(result => dispatch(typesClickButton[typeList](result)))
      .catch(error => console.log(error));    
  };

  return (
    <S.Button
      type='button'
      onClick={ () => handleClick() }
    >
      { icon }
    </S.Button>
  );
};