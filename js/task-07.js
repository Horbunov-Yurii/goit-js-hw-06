const inputRef = document.querySelector("#font-size-control");
const titleRef = document.querySelector("#text");

inputRef.addEventListener('input', onRangeChange);


function onRangeChange(evt){
const value = evt.currentTarget.value;

  titleRef.style.fontSize = `${value}px`;
}



// inputRef.addEventListener("input", function () {
//   titleRef.style.fontSize = `${inputRef.value}px`;
// });


























