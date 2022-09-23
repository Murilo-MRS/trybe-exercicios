import { createStore } from 'redux';
// type dentro de dispatch como passamos param p/ essa funcao usa-se arrow func
const fazerLogin = () => ({
    type: "LOGIN",
    email: 'teste@teste',
  });

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

//================REDUCER=============///
const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                login: !state.login,
                email: action.email,
            };
        default:
            return state;
    }
};

//================STORE=============///
const store = createStore(reducer);

console.log(store.getState());
//================ACTIONS=============///
store.dispatch(fazerLogin())
console.log(store.getState());
