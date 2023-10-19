const navbarNav = document.querySelector("#navbar-menu");
const hamburgerOpen = document.querySelector("#hamburger-open");
const hamburgerClose = document.querySelector("#hamburger-close");
const overlay = document.querySelector("#overlay");

const toggleMenu = () => {
	hamburgerOpen.classList.toggle("active");
	hamburgerOpen.classList.toggle("nonactive");
	navbarNav.classList.toggle("active");
	navbarNav.classList.toggle("nonactive");
	overlay.classList.toggle("block");
	overlay.classList.toggle("hidden");
};

hamburgerOpen.addEventListener("click", toggleMenu);
hamburgerClose.addEventListener("click", toggleMenu);

window.addEventListener("scroll", function () {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;
	const homepageBars = document.querySelector("#hamburger-open-bars");
	const logo = document.querySelector("#logo");
	const navbarUl = document.querySelector("#navbar-ul");

	if (window.pageYOffset > fixedNav) {
		header.classList.remove("homepage-header");
		header.classList.add("navbar-fixed");
		logo.classList.replace("text-white", "text-black");
		homepageBars.classList.replace("text-white", "text-black");
		navbarUl.classList.replace("lg:text-white", "lg:text-black");
	} else {
		header.classList.add("homepage-header");
		header.classList.remove("navbar-fixed");
		logo.classList.replace("text-black", "text-white");
		homepageBars.classList.replace("text-black", "text-white");
		navbarUl.classList.replace("lg:text-black", "lg:text-white");
	}
});
