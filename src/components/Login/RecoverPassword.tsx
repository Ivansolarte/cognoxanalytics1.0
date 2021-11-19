import React from 'react'
import bgLogin from '../../assets/img/bgLogin.jpg'
import logoCognox from '../../assets/img/logoCognox.svg'
import BtnClassic from '../../elements/buttons/BtnClassic'
import InputClassic from '../../elements/inputs/InputClassic'

export const RecoverPassword = () => {
  return (
    <div className="img-fund"
      style={{ backgroundImage: "url(" + bgLogin + ")" }}
    >
      <div className="col-3">
        <div className="col-content border-2 ">
          <img src={logoCognox} alt="logoLogin" className="mt-11 mb-7 h-28 w-auto mx-auto" />
          <InputClassic
            type=""
            value=""
            onChange={()=>{console.log('correo enviado para recuperar')}}
            placeholder="Ingrese tu correo"
          />
          <BtnClassic
            classes="btn-send w-full m-auto"
            text="Enviar correo"
// falta cuadrar  boton

          />
        </div>
       
      </div>
    </div>
  )
}


