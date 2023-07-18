const input = document.querySelector("#validation-input");

input.addEventListener('blur', onChandeBlur);


function onChandeBlur(evt){
   const inputValue = input.value;
   const maxStringLength = evt.currentTarget.dataset.length;
    
   if (inputValue.length < maxStringLength) {
     input.classList.remove("valid");
     input.classList.add("invalid");
   } else {
     input.classList.remove("invalid");
     input.classList.add("valid");
   }
};
 