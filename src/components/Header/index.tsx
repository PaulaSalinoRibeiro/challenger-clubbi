import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setInputSearch, setFiltered } from '../../app/gibiSlice';
import { MagnifyingGlass } from 'phosphor-react';
import { URL_LOGO } from '../../utils'; 

import * as S from './styled';

export function Header() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>('');

  const handleClick = () => {
    dispatch(setInputSearch(search));
    setSearch('');
    dispatch(setFiltered);
  };

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
            value={search}
            placeholder='Pesquisar'
            onChange={(e) => setSearch(e.target.value)}
          />
          <S.Button
            type='button'
            disabled={!(search.length > 0)}
            onClick={() => handleClick()}
          >
            <MagnifyingGlass size={26} color={'#7C00F4'} weight="bold" />
          </S.Button>
        </S.Label>
    </S.Container>
  )
};