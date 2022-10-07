import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFiltered } from '../../app/ghibhiSlice';
import { theme } from '../../global/theme';
import { MagnifyingGlass } from 'phosphor-react';
import { URL_LOGO } from '../../utils'; 

import * as S from './styled';

export function Header() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>('');

  const handleClick = () => {
    dispatch(setFiltered(search));
    setSearch('');
  };

  return (
    <S.Container>
      <img
        src={ URL_LOGO }
        alt='Logo Clubbi'
      />
      <S.Label htmlFor='searchInput'>
        <S.Input
          id='searchInput'
          type='text'
          name='search'
          value={search}
          placeholder='Pesquisar'
          onChange={ (e) => setSearch(e.target.value) }
        />
        <S.Button
          type='button'
          disabled={ !(search.length > 0) }
          onClick={ () => handleClick() }
        >
          <MagnifyingGlass
            size={ 26 } 
            color={ theme.background.secondary } 
            weight="bold" 
          />
        </S.Button>
      </S.Label>
    </S.Container>
  );
};