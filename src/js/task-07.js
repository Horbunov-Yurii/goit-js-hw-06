const inputRef = document.querySelector("#font-size-control");
const titleRef = document.querySelector("#text");

// inputRef.addEventListener('input', onRangeChange);

inputRef.addEventListener("input", function () {
  titleRef.style.fontSize = `${inputRef.value}px`;
});
// function onRangeChange(evt){
// const value = evt.currentTarget.value;
// const text = titleRef.textContent;
//   text.style.fontSize = `${value}px`;
   
// }


