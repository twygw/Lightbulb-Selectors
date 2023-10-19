// Write your code herecc
let lb1 = document.querySelector("#lightbulb1");
let lb2 = document.querySelector("#lightbulb2");
let lb3 = document.querySelector("#lightbulb3");
let subtitle = document.querySelector(".subtitle");
let count = 0;

lb1.addEventListener("click", function () {
  count += 1;
  subtitle.innerHTML = `You've clicked the lights ${count} times`;
  lb1.classList.toggle("active");
});
lb2.addEventListener("click", function () {
  count += 1;
  subtitle.innerHTML = `You've clicked the lights ${count} times`;
  lb2.classList.toggle("active");
});
lb3.addEventListener("click", function () {
  count += 1;
  subtitle.innerHTML = `You've clicked the lights ${count} times`;
  lb3.classList.toggle("active");
});
