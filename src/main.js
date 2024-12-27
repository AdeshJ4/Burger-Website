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
const allTabs = document.querySelectorAll('.item_wrap');
const foodTabs = document.querySelectorAll('.food');
const snackTabs = document.querySelectorAll(".snack");
const beverageTabs = document.querySelectorAll(".beverage");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active class from all tabs so that we can add to only clicked tab
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active');
    const tabVal = tab.getAttribute('data-tabs');

    allTabs.forEach(item => {
      item.style.display = 'none';  // hide and show elements without deleting and recreating them
    });

    if(tabVal === 'food'){
      foodTabs.forEach(item => {
        item.style.display = 'block'
      })
    }else if(tabVal === 'snack'){
      snackTabs.forEach(item => {
        item.style.display = 'block'
      })
    }else if(tabVal === 'beverage'){
      beverageTabs.forEach(item => {
        item.style.display = 'block'
      })
    }else{
      allTabs.forEach(item => {
        item.style.display = 'block'
      })
    }
    
  })
})


// scroll up 
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  if(this.scrollY >= 250){
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  }else{
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
}
window.addEventListener('scroll', scrollUp)


// change background header
const scrollHeader = () => {
  const headerScroll = document.getElementById("header");
  if(this.scrollY >= 50){
    headerScroll.classList.add('border-b', "border-secondaryColor")
  }else{
    headerScroll.classList.remove('border-b', "border-secondaryColor")
  }
}
window.addEventListener('scroll', scrollHeader);



// dark mode 
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode")  === 'dark'){
  darkMode()
}else{
  lightMode();
}

themeBtn.addEventListener("click", () => {
  if(localStorage.getItem("mode")  === 'light'){
    darkMode()
  }else{
    lightMode();
  }
})


function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark")
}

function lightMode () {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light")
}