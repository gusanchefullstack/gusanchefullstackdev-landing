import "./style.css";

const mobileMenuList = document.getElementById("mobileMenuList");
const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const menuGraph = document.getElementById("menu-graph");

mobileMenuIcon.addEventListener("click", (evt) => {
  mobileMenuList.classList.toggle("hidden");
  mobileMenuList.classList.toggle("mobile-menu");
  menuGraph.classList.toggle("fa-bars");
  menuGraph.classList.toggle("fa-xmark");
});
