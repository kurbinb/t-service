const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist2");
// const button = document.getElementById("button");

hamburger.addEventListener("click", () => {
  // Toggle die Klasse "show", um das Menü anzuzeigen oder auszublenden
  navlist.classList.toggle("show");
//   button.classList.toggle("show");
});