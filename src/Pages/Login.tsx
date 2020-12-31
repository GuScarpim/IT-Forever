import React, { useState } from 'react';
import * as S from './styles/login';

import Logo from '../Assets/logo1.png';

import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { login } from '../Services/auth';

import Api from '../Services/api';
import Globals from '../Globals.json';

const errorNotify = () => toast.error('Usuário e/ou senha inválido!.',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const sendData = () => {
    const params = {
      username: username,
      password: password
    }

    Api.post(Globals.api.login, params)
      .then(response => {
        if (response.data.token !== null && response.data.token !== ""
          && typeof response.data.token !== undefined && response.data.token !== undefined) {
          login(response.data.token);
          history.push(Globals.paths.home)
        } else {
          setError(true)
          errorNotify()
        }
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <S.Container>
      <Toaster />
      <S.Card error={error}>
        <S.Header>
          <img src={Logo} alt="IT Forever" />
        </S.Header>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your name.." />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password.." />

        {username === "" || password === "" ?
          <S.Button>Login</S.Button> :
          username && password !== "" &&
          <button onClick={sendData}>Login</button>
        }
        <code>Usuário e/ou Senha incorreto</code>
      </S.Card>
    </S.Container>
  )
}