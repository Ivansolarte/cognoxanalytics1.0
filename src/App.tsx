import React from 'react';
import './App.css';
import { PrivateRoute, PublicRoute } from './routers/_router.Main';



function App() {

  // window.localStorage.setItem("analytic","falso")  
  const varSess = window.localStorage.getItem('analytic');
  console.log(varSess ,'variable localstore');  

  if (varSess) {
    console.log('logeado');
    
  } else {
    console.log('no logeado');
  }
  
  return varSess!=='true'? <PublicRoute/>:<PrivateRoute/>

}

export default App;
