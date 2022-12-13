let value;
function createState(initialValue) {
  if (value === undefined) {
    value = initialValue;
  }
  function getState(newState) {
    value = newState;
  }
  return [value, getState];
}

const [state, setState] = createState(5);

const domState = document.getElementById("state");
const domPlus = document.getElementById("plus");
const domMinus = document.getElementById("minus");
domState.innerHTML = state;
domPlus.addEventListener("click", () => {
  console.log("clicked");
});
