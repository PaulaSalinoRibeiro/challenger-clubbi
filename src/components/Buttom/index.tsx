import React from 'react';

import * as S from './styled';

interface Props {
  icon: any,
};

export function Button ({ icon }: Props) {
  return (
    <S.Button
      type='button'
      onClick={() => console.log('clique')}
    >
      { icon }
    </S.Button>
  )
};