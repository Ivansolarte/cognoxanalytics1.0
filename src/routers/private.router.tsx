import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home } from '../components/Home/Home';


export const PrivateRouters = () => {
  return (
    <Switch>
      <Route path={"/"} component={Home}></Route>
    </Switch>
  )
}
