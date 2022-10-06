import { useDispatch } from 'react-redux'; 
import { setInputSearch, setFiltered } from '../../app/gibiSlice';

import * as S from './styled';

interface Props {
  icon: any,
  typeList: string,
};

export function Button ({ icon, typeList }: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setInputSearch(typeList));
    dispatch(setFiltered);
  };

  return (
    <S.Button
      type='button'
      onClick={() => handleClick()}
    >
      { icon }
    </S.Button>
  )
};