const a = document.querySelector(".jessus");
const b = document.querySelector(".jesusgod");

const togg = document.querySelector(".togglesidebar");
a.addEventListener("click", () => {
  togg.style.transform = "translateX(0%)";
  togg.style.transition = ".2s linear";
});
b.addEventListener("click", () => {
  togg.style.transform = "translateX(-100%)";
  togg.style.transition = ".2s linear";
});
