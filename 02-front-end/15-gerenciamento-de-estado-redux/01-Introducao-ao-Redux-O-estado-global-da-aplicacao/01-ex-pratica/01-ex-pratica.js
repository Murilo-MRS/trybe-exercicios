// import { createStore } from "redux";

const INITIAL_STATE = {
  colors: ["white", "black", "red", "green", "blue", "yellow"],
  index: 0,
};
const nextColor = "NEXT_COLOR";
const previousColor = "PREVIOUS_COLOR";
const randomColor = "RANDOM_COLOR";

function criarCor() {
  const oneChar = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

  let cor = "#";
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case nextColor:
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case previousColor:
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    case randomColor:
      return {
        ...state,
            colors: [...state.colors, criarCor()],
            index: state.colors.length,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
console.log(store.getState());

const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("previous");
const btnRandom = document.getElementById("random");

btnNext.addEventListener("click", (e) => {
  store.dispatch({ type: nextColor });
  console.log(store.getState());
});
btnPrev.addEventListener("click", (e) => {
  store.dispatch({ type: previousColor });
  console.log(store.getState());
});
btnRandom.addEventListener("click", (e) => {
  store.dispatch({ type: randomColor });
  console.log(store.getState());
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById("value").innerHTML = colors[index];
  document.getElementById("container").style.backgroundColor = colors[index];
});
