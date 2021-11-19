import React from 'react'
import { PrivateRouters } from './private.router';
import { PublicRouters } from './public.router';

//rutas publicas
const PublicRoute = () => {
  return (
    <PublicRouters />
  )
}

//rutas privadas solo entra con autenticacion TRUE
const PrivateRoute = () => {
  return (
    <PrivateRouters />
  )
}

export { PublicRoute, PrivateRoute }
