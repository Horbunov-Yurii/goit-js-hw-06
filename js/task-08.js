const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSabmit);


function onFormSabmit(evt){
  evt.preventDefault();
 
  const { email, password } = evt.target.elements;

  if(!email.value || !password.value){
    return alert("Fill in all fields");
  }

  console.log({
    email: email.value,
    password: password.value
  });

  formEl.reset()
}