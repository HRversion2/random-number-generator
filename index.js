const genbtn = document.querySelector("#random-number-generator");

genbtn.addEventListener("click", function () {
  const rand = document.querySelector("#rand");
  const num = Math.floor(Math.random() * 1000);
  rand.textContent = num;
});
