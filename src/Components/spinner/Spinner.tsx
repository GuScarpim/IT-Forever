import React, { useState } from 'react';
import * as S from './styles';

type Props = {
  button?: boolean;
}

const Burger = (props: Props) => {
  return (
    <S.Loader button={props.button} />
  )
}
export default Burger