let value = 0;
function createState(initialValue) {
  if (value === undefined) {
    value = initialValue;
  }
  function getState(newState) {
    value = newState;
  }
  return [value, getState];
}

const domState = document.getElementById("state");
const domPlus = document.getElementById("plus");
const domMinus = document.getElementById("minus");

domState.innerHTML = value;

domPlus.addEventListener("click", () => {
  let [state, setState] = createState(5);
  setState(state + 1);
  domState.innerHTML = state;
});

domMinus.addEventListener("click", () => {
  let [state, setState] = createState(5);
  setState(state - 1);
  domState.innerHTML = state;
});
