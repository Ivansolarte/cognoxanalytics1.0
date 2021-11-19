import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Login } from '../views/Login';
import { RecoverPassword } from '../components/Login/RecoverPassword';

export const PublicRouters= () => {
    return (
        <Switch>
            <Route path={"/recover"} component={RecoverPassword}></Route> 
            <Route path={"/newpass"} ><h1>nueva contrassena</h1></Route> 
            <Route path={"/"||"*"} component={Login}></Route> 
        </Switch>       
    )
}
