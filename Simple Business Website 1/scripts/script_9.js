let menu = document.querySelector(".headerLinks-block");
let menuBtn = document.querySelector(".header__icons");
let menuBtnIcon = document.querySelector(".header__icons i");

menuBtn.addEventListener("click", function () {
	if (menuBtnIcon.classList.contains("fa-bars")) {
		menu.style.left = 0;
		menuBtnIcon.classList = "fa fa-times";
	} else {
		menu.style.left = "-256px";
		menuBtnIcon.classList = "fa fa-bars";
	}
});
