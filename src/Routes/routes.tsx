import React from 'react'

import { isAuthenticated } from "../Services/auth";
import { Switch, Route, Redirect, BrowserRouter, RouteProps } from 'react-router-dom';

import Login from '../Pages/Login';
import Home from '../Pages/Home';

import Globals from '../Globals.json';

// const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => (
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Globals.paths.login} component={Login} />
        <PrivateRoute exact path={Globals.paths.home} component={Home} />
        <Redirect path="*" to={Globals.paths.home} />
      </Switch>
    </BrowserRouter>
  )
}
