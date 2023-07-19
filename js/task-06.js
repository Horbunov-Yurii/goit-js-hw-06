const input = document.querySelector("#validation-input");

input.addEventListener('blur', onChandeBlur);


function onChandeBlur(evt){
   const inputValue = input.value;
   const maxStringLength = Number(evt.currentTarget.dataset.length);
    
   if (inputValue.length === maxStringLength) {
     input.classList.add("valid");
     input.classList.remove("invalid");
   } else {
     input.classList.add("invalid");
     input.classList.remove("valid");
   }
};
 