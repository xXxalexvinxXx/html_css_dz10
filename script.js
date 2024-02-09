const menuSelector = document.querySelector(".menu_selector");
const menu = document.querySelector(".menu");

menuSelector.addEventListener("click", function () {
	menu.classList.toggle("hidden");
});
