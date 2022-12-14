import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { getAll } from '../../api';
import { setFilm } from '../../app/ghibhiSlice';
import { theme } from '../../global/theme';
import { FilmStrip, Users, MapPin } from 'phosphor-react';

import { Header } from '../../components/Header';
import { Button } from '../../components/Buttom';
import { FilmList } from '../../components/FilmList';
import { PeopleList } from '../../components/PeopleList';
import { LocationList } from '../../components/LocationList';

import * as S from './styled';

export function Main() {
  const endpoint = 'films';
  const dispatch = useDispatch();
  const { typeList } = useSelector((state: RootState) => state.ghibhi);

  useEffect(() => {
    getAll(endpoint)
      .then(result => dispatch(setFilm(result)))
      .catch(error => console.log(error.message));
  }, [dispatch]);

  return (
    <>
      <Header />
      <S.Container>
        <Button
          endpoint='films'
          dataTestId='film'
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
          dataTestId='people'
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
          dataTestId='locations'
          typeList='locationList'
          icon={ 
            < MapPin 
              color={ theme.colors.textLight } 
              size={ 32 } 
            /> 
          } 
        />
      </S.Container>
      <S.Card>
        {
          typeList === 'filmList' && <FilmList />
        }
      </S.Card>
      <S.Card>
        {
          typeList === 'peopleList' && <PeopleList />
        }
      </S.Card>
      <S.Card>
        {
          typeList === 'locationList' && <LocationList />
        }
      </S.Card>
    </>
  );
};
