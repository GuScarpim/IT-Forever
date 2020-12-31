import React, { useState } from 'react'
import * as S from './styles';

import { useHistory } from 'react-router-dom'
import { logout } from '../../Services/auth'

import Globals from '../../Globals.json';

type Props = {
  open: boolean;
}

function RightNav(props: Props) {
  const history = useHistory();

  const singOut = () => {
      logout()
      history.push(Globals.paths.login)
  }

  return (
    <S.Ul open={props.open}>
      <li><button onClick={singOut} className="LinkHome">Logout</button></li>
    </S.Ul>
  )
}

export default RightNav
