import create from "zustand";
import {loginState} from "./login.state";
 
export const loginActions = create(() => ({

    ValidateOtp: (state:boolean) => {
     alert('validarotp')
    },

    SigIn: (payload) => {
        console.log( 'loginAactionnnnn')
        
        loginState.setState({            
            modalTwoFactor: true,
        })
    },
}))