function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// const boxEl = document.querySelector("#boxes");

// let marcup = "";

// stepWidtht = 10;
// stepHeight = 10;

// for(let i=0; i<100; i+=1){
//   marcup += `<div class = "item"></div>`;
// }




// boxEl.insertAdjacentHTML('beforeend', marcup)


