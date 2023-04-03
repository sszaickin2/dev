// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
//========================================================================================================================================================
// function highlightActiveMenuItem() {
//   const currentUrl = window.location.href;
//   const menuLinks = document.querySelectorAll("#menu a");

//   menuLinks.forEach((link) => 
//     const linkUrl = link.href;

//     if (currentUrl.includes(linkUrl)) {
//       link.parentNode.classList.add("active");
//     } else {
//       link.parentNode.classList.remove("active");
//     }
//   });
// }

// window.addEventListener("load", highlightActiveMenuItem);
// window.addEventListener("hashchange", highlightActiveMenuItem);

//========================================================================================================================================================
const contentTabs = document.querySelectorAll(".body-tabs__content");

if (contentTabs.length > 0) {
  contentTabs.forEach((element) => {
    element.addEventListener("click", (event) => {
      let target = event.target;
      if (target.classList.contains("body-tabs__name") || target.classList.contains("body-tabs__arrow")) {
        element.classList.toggle("body-tabs__active");
      }
    });
  });
}
//========================================================================================================================================================
const slider = document.querySelectorAll(".attention__num");
const indexItem = document.querySelector(".nav__number-index");
const numberItem = document.querySelector(".nav__number-number");

const sliderDoubleTab = document.querySelectorAll(".attention__num-num");
const sliderBoubleIndex = document.querySelector(".nav__number-i");
const sliderBoubleNumber = document.querySelector(".nav__number-n");

if (slider && slider.length > 0 && indexItem) {
  let sliderIndex = 1;
  let sliderDoubleIndex = 1;
  let sliderLength = slider.length;
  let sliderBoubleLength = sliderDoubleTab.length;

  indexItem.innerHTML = sliderIndex;
  numberItem.innerHTML = sliderLength;

  sliderBoubleIndex.innerHTML = sliderDoubleIndex;
  sliderBoubleNumber.innerHTML = sliderBoubleLength;

  function showSlider(n) {
    if (n < 1) {
      sliderIndex = slider.length;
    } else if (n > slider.length) {
      sliderIndex = 1;
    }
    for (let i = 0; i < slider.length; i++) {
      slider[i].hidden = true;
    }
    slider[sliderIndex - 1].hidden = false;
  }

  function plusSlider(n) {
    showSlider((sliderIndex += n));
  }

  function nextSlider(num) {
    if (num < 1) {
      sliderDoubleIndex = sliderDoubleTab.length;
    } else if (num > sliderDoubleTab.length) {
      sliderDoubleIndex = 1;
    }
    for (let i = 0; i < sliderDoubleTab.length; i++) {
      sliderDoubleTab[i].hidden = true;
    }
    sliderDoubleTab[sliderDoubleIndex - 1].hidden = false;
  }

  function openSlider(num) {
    nextSlider((sliderDoubleIndex += num));
  }

  document.addEventListener("click", function buttonClick(event) {
    let target = event.target;

    if (target.classList.contains("nav__arrow-right")) {
      plusSlider(1);
      indexItem.innerHTML = sliderIndex;
    }
    if (target.classList.contains("nav__arrow-left")) {
      plusSlider(-1);
      indexItem.innerHTML = sliderIndex;
    }

    if (target.classList.contains("arrow-right")) {
      openSlider(1);
      sliderBoubleIndex.innerHTML = sliderDoubleIndex;
    }
    if (target.classList.contains("arrow-left")) {
      openSlider(-1);
      sliderBoubleIndex.innerHTML = sliderDoubleIndex;
    }
  });
}
//========================================================================================================================================================
const menuItem = document.querySelectorAll(".menu__item");
const menuItemLink = document.querySelectorAll(".menu__arrow");
const subMenuLink = document.querySelectorAll(".sub-menu__arrow-list");
const subMenuItem = document.querySelectorAll(".sub-menu__item");
const subSubMenuLink = document.querySelectorAll(".sub-sub-menu__arrow-list");
const subSubMenuItem = document.querySelectorAll(".sub-sub-menu__item");

let menuItemLinkClick = function (event) {
  const target = event.target;
  for (let index = 0; index < menuItemLink.length; index++) {
    if (target === menuItemLink[index]) {
      menuItem[index].classList.toggle("menu__item-active");
    }
  }
};

menuItem.forEach((item) => {
  const itemContent = item.querySelectorAll(".sub-menu__list");
  if (itemContent.length > 0) {
    item.addEventListener("click", menuItemLinkClick);
  } else {
    item.classList.toggle("menu__link-close");
    item.classList.remove("menu__item-active");
  }
});

let submenuLinkClick = function (event) {
  const target = event.target;
  for (let index = 0; index < subMenuLink.length; index++) {
    if (target === subMenuLink[index]) {
      subMenuItem[index].classList.toggle("sub-menu__item-active");
    }
  }
};

subMenuItem.forEach((el) => {
  const subItemContent = el.querySelectorAll(".sub-sub-menu__list");
  if (subItemContent.length > 0) {
    el.addEventListener("click", submenuLinkClick);
  } else {
    el.classList.toggle("menu__link-close");
  }
});

let subSubMenuLinkClick = function (event) {
  const target = event.target;
  for (let index = 0; index < subSubMenuLink.length; index++) {
    if (target === subSubMenuLink[index]) {
      subSubMenuItem[index].classList.toggle("sub-sub-menu__item-active");
    }
  }
};

subSubMenuItem.forEach((item) => {
  const subSubItemContent = item.querySelectorAll(".sub-sub-sub-menu__list");
  if (subSubItemContent.length > 0) {
    item.addEventListener("click", subSubMenuLinkClick);
  } else {
    item.classList.toggle("menu__link-close");
  }
});
