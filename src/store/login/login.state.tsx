import create from "zustand";

const loginState = create( () =>({
    modalTwoFactor : false,
}))

// const auth = create( () => ({
//     authHome: false
// }))

export {
    loginState
}