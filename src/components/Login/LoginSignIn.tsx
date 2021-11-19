import React, { useState } from 'react'
import InputClassic from '../../elements/inputs/InputClassic';
import logoCognox from '../../assets/img/logoCognox.svg'
import InputPassword from '../../elements/inputs/InputPassword';
import BtnClassic from '../../elements/buttons/BtnClassic';
import { loginActions } from "../../store/login/_login.main"
import LinkClassic from '../../elements/link/LinkClassic';

//func/
import {ValidateEmail} from '../../assets/js/functions'


export const LoginForm = () => {
    
    const [style, setStyle] = useState(true)

    //variables de usuario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { SigIn } = loginActions();

    const inputEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
        
        console.log(ValidateEmail(email),'estas en sttado');
        if (ValidateEmail(email)) {
            setStyle(false)
        } 
        

    }

    const inputPass = (e) => {
        const password = e.target.value;
        setPassword(password);
        console.log(password);
    }

    return (
        <div className=" border-2">
            <img src={logoCognox} alt="logoLogin" className="mt-11 mb-7 h-28 w-auto mx-auto" />
            <h1 className="w-full text-3xl flex justify-center mb-14 text-white">Cognox-Xp</h1>
            <InputClassic
                classes={style?"":"input-alert"}
                type="text"
                value={email}
                onChange={inputEmail}
                placeholder="Email"
            />
            <InputPassword
                type="password"
                value={password}
                onChange={inputPass}
                placeholder="Password"
            />
            <BtnClassic
                classes="btn btn-send w-full my-3"
                click={() => SigIn(false)}
                text="nviar"
            />
            <LinkClassic
                router="/recover"
                classes="a-link"
                text="¿No recuerdas tu contraseña?"            
                
            />
        </div>
    )
}
