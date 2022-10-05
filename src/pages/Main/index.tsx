import React from 'react';
import { Header } from '../../components/Header';
import { Button } from '../../components/Buttom';
import { FilmStrip, Users, MapPin } from 'phosphor-react';

import * as S from './styled';

export function Main() {
  return (
    <>
      <Header />
      <S.Container>
        <Button 
          icon={ <FilmStrip color={ 'white' } size={32} /> }
        />
        <Button 
          icon={ <Users color={ 'white' } size={32} /> }
        />
        <Button 
          icon={ < MapPin color={'white'} size={ 32 } /> } 
        />
      </S.Container>
    </>
  )
}