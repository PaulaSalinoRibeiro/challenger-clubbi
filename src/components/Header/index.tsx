import React from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import { URL_LOGO } from '../../utils'; 

import * as S from './styled';

export function Header() {
   
  return (
    <S.Container>
      <img 
        src={URL_LOGO}
        alt='Logo Clubbi'/>
        <S.Label htmlFor='searchInput'>
          <S.Input
            id='searchInput'
            type='text'
            name='search'
            value=''
            placeholder='Pesquisar'
            onChange={(e) => console.log(e.target.value)}
          />
          <S.Button
            type='button'
            onClick={() => console.log('click')}
          >
            <MagnifyingGlass size={24} />
          </S.Button>
        </S.Label>
    </S.Container>
  )
};