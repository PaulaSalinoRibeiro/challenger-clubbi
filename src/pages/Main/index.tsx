import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { getAll } from '../../api';
import { setFilm } from '../../app/gibiSlice';
import { theme } from '../../global/theme';

import { Header } from '../../components/Header';
import { Button } from '../../components/Buttom';
import { FilmCard } from '../../components/FilmCard';
import { PeopleCard } from '../../components/PeopleCard';
import { LocationCard } from '../../components/LocationCard';
import { FilmStrip, Users, MapPin } from 'phosphor-react';

import * as S from './styled';

export function Main() {
  const dispatch = useDispatch();
  const { typeList } = useSelector((state: RootState) => state.gibi);

  useEffect(() => {
    getAll('films')
      .then(result => dispatch(setFilm(result)))
      .catch(error => console.log(error.message));
  }, [dispatch]);

  return (
    <>
      <Header />
      <S.Container>
        <Button
          endpoint='films'
          typeList='filmList'
          icon={ 
            <FilmStrip 
              color={ theme.colors.textLight } 
              size={ 32 } 
            /> 
          }
        />
        <Button
          endpoint='people'
          typeList='peopleList'
          icon={ 
            <Users 
              color={ theme.colors.textLight } 
              size={ 32 } 
            /> 
          }
        />
        <Button
          endpoint='locations'
          typeList='locationList'
          icon={ 
            < MapPin 
              color={ theme.colors.textLight } 
              size={ 32 } 
            /> 
          } 
        />
      </S.Container>
      <div>
        {
          typeList === 'filmList' && <FilmCard />
        }
      </div>

      <div>
        {
          typeList === 'peopleList' && <PeopleCard />
        }
      </div>

      <div>
        {
          typeList === 'locationList' && <LocationCard />
        }
      </div>
    </>
  );
};
