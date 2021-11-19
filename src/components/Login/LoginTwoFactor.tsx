import React from 'react'
import PinInput from 'react-pin-input'
import { loginActions } from '../../store/login/login.actions';


export const LoginTwoFactor = () => {

    const { ValidateOtp } = loginActions();

    return (
        <div className="modal ">
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none "> {/*volverlo trasparente */}
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">

                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-yellow-500 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => ValidateOtp(false)}
                            ><p className="text-black ">X</p>

                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <PinInput
                                inputFocusStyle={{
                                    backgroundColor: 'red'
                                }}
                                autoSelect={true}
                                length={4}
                                inputStyle={{
                                    borderRadius: "12px",
                                }}
                            />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            {/* <button
                                className="text-red-500 border-2 rounded-lg px-6 py-3 mr-1"
                                type="button"
                                onClick={() => ValidateOtp(false)}
                            >
                               Cancelar
                            </button> */}
                            <button className="text-blue-600 mr-3"><p>Nuevo PIN</p></button>
                            <button
                                className="bg-green-400 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => ValidateOtp(true)}
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}
