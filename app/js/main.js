!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/js/main.js")}({"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */function(module,exports){eval("var _Swiper;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// === HEADER SCROLL ===\nwindow.onscroll = function showHeader() {\n  var header = document.querySelector('.header');\n\n  if (window.pageYOffset > 110) {\n    header.classList.add('header-fixed');\n  } else {\n    header.classList.remove('header-fixed');\n  }\n\n  ;\n}; // === BURGER BTN ===\n\n\nvar header = document.querySelector('.header');\ndocument.querySelector('.burger-btn').addEventListener('click', function (e) {\n  e.preventDefault();\n\n  if (header.classList.contains('header--active')) {\n    header.classList.remove('header--active');\n    document.body.style.overflow = 'visible';\n  } else if (!header.classList.contains('header--active')) {\n    header.classList.add('header--active');\n    document.body.style.overflow = 'hidden';\n  }\n\n  ;\n});\nwindow.addEventListener('click', function (e) {\n  if (!e.target.closest('.menu__list') && !e.target.closest('.burger-btn')) {\n    header.classList.remove('header--active');\n    document.body.style.overflow = 'visible';\n  } else if (e.target.closest('.search-form__button--close')) {\n    header.classList.remove('header--active');\n    document.body.style.overflow = 'hidden';\n  }\n\n  ;\n}); // === CARD WISH ===\n\ndocument.querySelectorAll('.card__wish').forEach(function (item) {\n  item.addEventListener('click', function () {\n    item.classList.toggle('card__wish--choose');\n  });\n}); // === CARD BUY BTN ===\n\ndocument.querySelectorAll('.card__buy-btn').forEach(function (item) {\n  item.addEventListener('click', function () {\n    item.classList.toggle('card__buy-btn--choose');\n  });\n}); // === SEARCH BUTTON ===\n\nvar searchForm = document.querySelector('.search');\ndocument.querySelectorAll('.search-button').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    e.preventDefault();\n    searchForm.classList.toggle('search--active');\n  });\n});\nwindow.addEventListener('click', function (e) {\n  if (!e.target.closest('.search') && !e.target.closest('.search-button')) {\n    searchForm.classList.remove('search--active');\n  } else if (e.target.closest('.search-form__button--close')) {\n    e.preventDefault();\n    searchForm.classList.remove('search--active');\n  }\n\n  ;\n}); // === SELECT ===\n\ndocument.querySelectorAll('.select-item').forEach(function (item) {\n  2;\n  var choices = new Choices(item, {\n    searchEnabled: false\n  });\n}); // === DROPDOWN ===\n\nvar menuList = document.querySelector('.menu__list');\ndocument.querySelector('.header-submenu').addEventListener('click', function () {\n  menuList.classList.toggle('menu__list--active');\n});\nwindow.addEventListener('click', function (e) {\n  if (!e.target.closest('.header-submenu') && !e.target.closest('.dropdown')) {\n    menuList.classList.remove('menu__list--active');\n  }\n\n  ;\n}); // === SHOW DROPDOWN MENU ===\n\ndocument.querySelectorAll('.dropdown-item__title').forEach(function (item) {\n  item.addEventListener('click', function (event) {\n    event.preventDefault();\n    item.parentNode.classList.toggle('dropdown-item--active');\n  });\n});\ndocument.querySelectorAll('.dropdown-item').forEach(function (item) {\n  if (item.children.length < 2) item.classList.add('dropdown-item-one');\n}); // === INTRO SLIDER ===\n\nvar introSlider = new Swiper(\".intro__slider\", (_Swiper = {\n  slideClass: 'intro__item',\n  wrapperClass: 'intro__items',\n  speed: 1000,\n  loop: true,\n  autoplay: true\n}, _defineProperty(_Swiper, \"autoplay\", {\n  delay: 7000\n}), _defineProperty(_Swiper, \"grabCursor\", true), _defineProperty(_Swiper, \"effect\", \"fade\"), _defineProperty(_Swiper, \"navigation\", {\n  nextEl: \".intro__slider-next\",\n  prevEl: \".intro__slider-prev\"\n}), _Swiper)); // === SLIDER ABOUT ===\n\nvar aboutContainer = document.querySelector('.about-section__slider');\n\nif (aboutContainer) {\n  var mobileSlider = function mobileSlider() {\n    if (window.innerWidth <= 600 && aboutContainer.dataset.mobile === 'false') {\n      about = new Swiper(aboutContainer, {\n        slideClass: 'about-section__info-text',\n        wrapperClass: 'about-section__info',\n        slidesPerView: 1,\n        spaceBetween: 30,\n        pagination: {\n          el: \".swiper-pagination\"\n        }\n      });\n      aboutContainer.dataset.mobile = 'true';\n    }\n\n    ;\n\n    if (window.innerWidth > 600) {\n      aboutContainer.dataset.mobile = 'false';\n\n      if (aboutContainer.classList.contains('swiper-container-initialized')) {\n        about.destroy();\n      }\n\n      ;\n    }\n\n    ;\n  };\n\n  var about;\n  ;\n  window.addEventListener('resize', function () {\n    mobileSlider();\n  });\n  mobileSlider();\n}\n\n; // === MAIN GOODS SLIDER ===\n\nvar mainGoods = new Swiper(\".main-goods__slider\", {\n  slideClass: 'main-goods__item',\n  wrapperClass: 'main-goods__wrapper',\n  speed: 900,\n  autoplay: {\n    delay: 3000\n  },\n  spaceBetween: 28,\n  navigation: {\n    nextEl: \".swiper-button-next\",\n    prevEl: \".swiper-button-prev\"\n  },\n  initialSlide: 1,\n  breakpoints: {\n    1150: {\n      spaceBetween: 28,\n      slidesPerView: 4\n    },\n    1000: {\n      spaceBetween: 20,\n      slidesPerView: 'auto'\n    },\n    500: {\n      spaceBetween: 10,\n      slidesPerView: 'auto'\n    },\n    0: {\n      spaceBetween: 5,\n      slidesPerView: 'auto',\n      centeredSlides: true\n    }\n  }\n}); // === PRODUCT ONE ===\n\nvar product = new Swiper(\".product__gallery\", {\n  slideClass: 'product__slide',\n  wrapperClass: 'product__slider',\n  navigation: {\n    nextEl: \".swiper-button-next\",\n    prevEl: \".swiper-button-prev\"\n  },\n  speed: 900,\n  autoplay: {\n    delay: 5000\n  }\n});\ndocument.querySelectorAll('.product__wish').forEach(function (item) {\n  item.addEventListener('click', function () {\n    item.classList.toggle('product__wish--selected');\n  });\n}); // === SHOW MORE TEXT ===\n\nif (document.querySelector('.product__description-text')) {\n  var text = document.querySelectorAll('.product__description-text');\n  text.forEach(function (item) {\n    var btn = item.querySelector('.product__description-btn');\n    btn.addEventListener('click', function () {\n      if (!item.classList.contains('show-text')) {\n        item.classList.add('show-text');\n      }\n    });\n  });\n}\n\n; // === CATEGORY RANGE SLIDER ===\n\nvar rangeSlider = document.querySelector('.category-price__slider');\n\nif (rangeSlider) {\n  noUiSlider.create(rangeSlider, {\n    start: [100, 99999],\n    connect: true,\n    step: 1,\n    range: {\n      'min': [100],\n      'max': [99999]\n    }\n  });\n  var input0 = document.querySelector('#input-0');\n  var input1 = document.querySelector('#input-1');\n  var inputs = [input0, input1];\n  rangeSlider.noUiSlider.on('update', function (values, handle) {\n    inputs[handle].value = Math.round(values[handle]);\n  });\n\n  var setRangeSlider = function setRangeSlider(i, value) {\n    var arr = [null, null];\n    arr[i] = value;\n    rangeSlider.noUiSlider.set(arr);\n  };\n\n  inputs.forEach(function (el, index) {\n    el.addEventListener('change', function (e) {\n      setRangeSlider(index, e.currentTarget.value);\n    });\n  });\n}\n\n; // === CATEGORY MOVILE ===\n\nvar categoryBtn = document.querySelector('.category__mobile-btn');\n\nif (categoryBtn) {\n  categoryBtn.addEventListener('click', function (event) {\n    event.preventDefault();\n    document.querySelector('.category').classList.toggle('category--active');\n  });\n}\n\n; // === PHONE MASK ===\n\nvar element = document.getElementById('input__phone');\n\nif (element) {\n  var maskOptions = {\n    mask: '+380 (00) 000-00-00',\n    lazy: false\n  };\n  var mask = IMask(element, maskOptions);\n}\n\n; // === BASKET ===\n\nif (document.querySelector('.basket')) {\n  var basket = document.querySelectorAll('.basket-product');\n  basket.forEach(function (item) {\n    var basketMinus = item.querySelector('.basket-count__btn--minus'),\n        basketPlus = item.querySelector('.basket-count__btn--plus'),\n        basketInput = item.querySelector('.basket-count__input'),\n        basketPrice = item.querySelector('.basket-product__price-num');\n    var startPrice = basketPrice.textContent;\n    var price = +basketPrice.textContent;\n    basketPrice.textContent = Math.round(price * basketInput.value);\n    basketPlus.addEventListener('click', function () {\n      basketInput.value++;\n      basketPrice.textContent = Math.round(price * basketInput.value);\n    });\n    basketMinus.addEventListener('click', function (e) {\n      basketInput.value--;\n\n      if (basketInput.value < 1) {\n        basketInput.value = 1;\n        item.remove();\n      }\n\n      basketPrice.textContent = Math.round(+basketPrice.textContent - +startPrice);\n\n      if (!document.querySelector('.basket-product')) {\n        document.querySelector('.basket__content').remove();\n        document.querySelector('.basket__subtitle').style.display = 'block';\n        document.querySelector('.breadcrumbs').remove();\n      }\n    });\n  });\n  var basketBtn = document.querySelectorAll('.basket-count__btn');\n  basketBtn.forEach(function (item) {\n    item.addEventListener('click', function () {\n      calcSum();\n    });\n  });\n  calcSum();\n}\n\nfunction calcSum() {\n  var priceGoods = document.querySelectorAll('.basket-product__price-num');\n\n  if (priceGoods) {\n    var sum = 0;\n\n    for (var i = 0; i < priceGoods.length; i++) {\n      sum = sum + +priceGoods[i].textContent;\n    }\n\n    if (document.querySelector('.basket__total-num')) {\n      document.querySelector('.basket__total-num').textContent = sum;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/js/main.js?")}});