import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './globalStyles';

import Login from './Pages/Login';
import Route from './Routes/routes';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Route />
  </React.StrictMode>,
  document.getElementById('root')
);

