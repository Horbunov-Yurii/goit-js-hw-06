

const list = document.querySelectorAll(".item");
// console.log(list.length)
console.log("Number of categories:", list.length);

list.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  console.log("Category:", title);

  const elem = item.querySelectorAll("li");
  console.log("Elements:", elem.length);
});