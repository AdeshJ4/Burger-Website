const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");


hamburger.addEventListener("click", () => {
  navMenu.classList.remove('hidden');
})

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden")
})

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden")
  })
})


// TABS
const tabs = document.querySelectorAll(".tabs__wrap ul li");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active class from all tabs so that we can add to only clicked tab
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })

    tab.classList.add('active');
  })
})