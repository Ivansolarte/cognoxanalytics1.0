import React from 'react'
import bgLogin from '../assets/img/bgLogin.jpg'
import logo from '../assets/img/logoEvolution.png'
import { LoginForm } from '../components/Login/LoginSignIn'
import { LoginTwoFactor } from '../components/Login/LoginTwoFactor'
import { loginState } from '../store/login/_login.main'

export const Login = () => {

  const { modalTwoFactor } = loginState();
  console.log(modalTwoFactor, 'modalllll views inicio login');

  return (
    <>
      <div className="img-fund"
        style={{ backgroundImage: "url(" + bgLogin + ")" }}
      >
        <img src={logo} alt="EvolutionXP" className="absolute top-4 right-7 h-24" />
        <div className="col-3 ">
          <div className="col-content">
            <LoginForm />
          </div>
        </div>
        {modalTwoFactor ? (<LoginTwoFactor />) : null}
      </div>
    </>
  )
}