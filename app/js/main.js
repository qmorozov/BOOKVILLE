window.onscroll=function(){const e=document.querySelector(".header");window.pageYOffset>110?e.classList.add("header-fixed"):e.classList.remove("header-fixed")};const header=document.querySelector(".header");document.querySelector(".burger-btn").addEventListener("click",(function(e){e.preventDefault(),header.classList.contains("header--active")?(header.classList.remove("header--active"),document.body.style.overflow="visible"):header.classList.contains("header--active")||(header.classList.add("header--active"),document.body.style.overflow="hidden")})),window.addEventListener("click",e=>{e.target.closest(".menu__list")||e.target.closest(".burger-btn")?e.target.closest(".search-form__button--close")&&(header.classList.remove("header--active"),document.body.style.overflow="hidden"):(header.classList.remove("header--active"),document.body.style.overflow="visible")}),document.querySelectorAll(".card__wish").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("card__wish--choose")}))})),document.querySelectorAll(".card__buy-btn").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("card__buy-btn--choose")}))}));const searchForm=document.querySelector(".search");document.querySelectorAll(".search-button").forEach((function(e){e.addEventListener("click",e=>{e.preventDefault(),searchForm.classList.toggle("search--active")})})),window.addEventListener("click",e=>{e.target.closest(".search")||e.target.closest(".search-button")?e.target.closest(".search-form__button--close")&&(e.preventDefault(),searchForm.classList.remove("search--active")):searchForm.classList.remove("search--active")});const choices=new Choices("select",{searchEnabled:!1}),menuList=document.querySelector(".menu__list");document.querySelector(".header-submenu").addEventListener("click",()=>{menuList.classList.toggle("menu__list--active")}),window.addEventListener("click",e=>{e.target.closest(".header-submenu")||e.target.closest(".dropdown")||menuList.classList.remove("menu__list--active")}),document.querySelectorAll(".dropdown-item__title").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),e.parentNode.classList.toggle("dropdown-item--active")}))})),document.querySelectorAll(".dropdown-item").forEach((function(e){e.children.length<2&&e.classList.add("dropdown-item-one")}));let introSlider=new Swiper(".intro-slider",{slideClass:"intro-item",wrapperClass:"intro-items",speed:1e3,loop:!0,autoplay:!0,autoplay:{delay:7e3},grabCursor:!0,effect:"fade",navigation:{nextEl:".intro-slider-next",prevEl:".intro-slider-prev"}});const aboutContainer=document.querySelector(".about-slider");let about;function mobileSlider(){window.innerWidth<=600&&"false"===aboutContainer.dataset.mobile&&(about=new Swiper(aboutContainer,{slideClass:"about-info__text",wrapperClass:"about-info",slidesPerView:1,spaceBetween:30,pagination:{el:".swiper-pagination"}}),aboutContainer.dataset.mobile="true"),window.innerWidth>600&&(aboutContainer.dataset.mobile="false",aboutContainer.classList.contains("swiper-container-initialized")&&about.destroy())}window.addEventListener("resize",()=>{mobileSlider()}),mobileSlider();let mainGoods=new Swiper(".main-goods__slider",{slideClass:"main-goods__item",wrapperClass:"main-goods__wrapper",speed:900,autoplay:{delay:3e3},spaceBetween:28,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},initialSlide:1,breakpoints:{1150:{spaceBetween:28,slidesPerView:4},1e3:{spaceBetween:20,slidesPerView:"auto"},500:{spaceBetween:10,slidesPerView:"auto"},0:{spaceBetween:5,slidesPerView:"auto",centeredSlides:!0}}});
//# sourceMappingURL=main.js.map
