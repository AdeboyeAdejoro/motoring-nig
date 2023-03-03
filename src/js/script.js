// const defaultSelect = () => {
//     const options = {
//         searchEnabled: false,
//         position: 'top',
//         duplicateItemsAllowed: false,
//     };

//     const element = document.querySelector('.order__form-select');
//     const choices = new Choices(element, options);
// }

// defaultSelect();

var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowicon");

selectField.onclick = function() {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}

for(option of options) {
    option.onclick = function() {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");

    }
}


// document.addEventListener('DOMContentLoaded', () => {
//     let order__selector = document.querySelector('.order__selector');
//     let selectField = document.getElementById('selectField');
//     let list = document.getElementById('list');
//     let selectText = document.getElementById('selectText');
//     let options = document.querySelectorAll('.options');

//     options.forEach(el => {
//         el.addEventListener('click', (e) => {
//             selectText.textContent = this.textContent;
//         });
//     });
// });

var selectField2 = document.getElementById("selectField2");
var selectText2 = document.getElementById("selectText2");
var options2 = document.getElementsByClassName("options2");
var list2 = document.getElementById("list2");
var arrowIcon2 = document.getElementById("arrowicon2");

selectField2.onclick = function() {
    list2.classList.toggle("hide2");
    arrowIcon2.classList.toggle("rotate2");
}

for(option2 of options2) {
    option2.onclick = function() {
        selectText2.innerHTML = this.textContent;
        list2.classList.toggle("hide2");
        arrowIcon2.classList.toggle("rotate2");

    }
}

let order__button = document.getElementById("order__button");
let box = document.querySelector(".order__box");

order__button.addEventListener("click", function(e) {
    box.classList.toggle("show");
});

const slider = document.querySelector('.swiper-container');

const swiperOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    // centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },  

  };

let mySwiper = new Swiper(slider, swiperOptions);

let cancel = document.querySelector('.header-mobile__cancel');
let burger = document.querySelector('.header-mobile__burger');
let menu = document.querySelector('.header-mobile__menu');

burger.addEventListener("click", function(e) {
    menu.classList.add("display");
});
cancel.addEventListener("click", function(e) {
    menu.classList.remove("display");
});
