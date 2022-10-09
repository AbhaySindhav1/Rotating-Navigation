const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const container = document.querySelector(".container");
const li_1 = document.querySelector("#li-1");
const li_2 = document.querySelector("#li-2");
const li_3 = document.querySelector("#li-3");

const circle = document.querySelector(".circle");

menu.addEventListener("click", () => {
  circle.classList.add("active");
  container.classList.add("active");
  li_1.classList.add("active");
  li_2.classList.add("active");
  li_3.classList.add("active");
});
close.addEventListener("click", () => {
  circle.classList.remove("active");
  container.classList.remove("active");
  li_1.classList.remove("active");
  li_2.classList.remove("active");
  li_3.classList.remove("active");
});
