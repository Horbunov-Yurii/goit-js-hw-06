const input = document.querySelector("#name-input");
const titleSpan = document.querySelector("#name-output");


input.addEventListener('input', onSerchInput);


const text = "Anonymous";

function onSerchInput(evt){
  const title = evt.currentTarget;
  if (title.value !== "") {
    titleSpan.textContent = title.value;
  }else{
    titleSpan.textContent = text;
  }
  
}