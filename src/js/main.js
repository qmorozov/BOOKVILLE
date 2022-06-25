// === HEADER SCROLL ===

window.onscroll = function showHeader() {
    const header = document.querySelector('.header');

    if (window.pageYOffset > 110) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    };
};

// === BURGER BTN ===

const header = document.querySelector('.header');

document.querySelector('.burger-btn').addEventListener('click', function (e) {
    e.preventDefault();

    if (header.classList.contains('header--active')) {
        header.classList.remove('header--active');
        document.body.style.overflow = 'visible';
    } else if (!header.classList.contains('header--active')) {
        header.classList.add('header--active');
        document.body.style.overflow = 'hidden';
    };
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.menu__list') && !e.target.closest('.burger-btn')) {
        header.classList.remove('header--active');
        document.body.style.overflow = 'visible';
    } else if (e.target.closest('.search-form__button--close')) {
        header.classList.remove('header--active');
        document.body.style.overflow = 'hidden';
    };
});

// === CARD WISH ===

document.querySelectorAll('.card__wish').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('card__wish--choose');
    });
});

// === SEARCH BUTTON ===

const searchForm = document.querySelector('.search');

document.querySelectorAll('.search-button').forEach(function (item) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        searchForm.classList.toggle('search--active');
    });
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.search') && !e.target.closest('.search-button')) {
        searchForm.classList.remove('search--active');
    } else if (e.target.closest('.search-form__button--close')) {
        e.preventDefault();
        searchForm.classList.remove('search--active');
    };
});

// === SELECT ===

document.querySelectorAll('.select-item').forEach(function (item) {
    2
    const choices = new Choices(item, {
        searchEnabled: false,
    });
});

// === DROPDOWN ===

const menuList = document.querySelector('.menu__list');

document.querySelector('.header-submenu').addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active');
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.header-submenu') && !e.target.closest('.dropdown')) {
        menuList.classList.remove('menu__list--active');
    };
});

// === SHOW DROPDOWN MENU ===

document.querySelectorAll('.dropdown-item__title').forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        item.parentNode.classList.toggle('dropdown-item--active');
    });
});

document.querySelectorAll('.dropdown-item').forEach(function (item) {
    if (item.children.length < 2) item.classList.add('dropdown-item-one');
});

// === INTRO SLIDER ===

let introSlider = new Swiper(".intro__slider", {
    slideClass: 'intro__item',
    wrapperClass: 'intro__items',
    speed: 1000,
    loop: true,
    autoplay: true,
    grabCursor: true,
    effect: "fade",
    navigation: {
        nextEl: ".intro__slider-next",
        prevEl: ".intro__slider-prev",
    },
});

// === SLIDER ABOUT ===

const aboutContainer = document.querySelector('.about-section__slider');

if (aboutContainer) {
    let about;

    function mobileSlider() {
        if (window.innerWidth <= 600 && aboutContainer.dataset.mobile === 'false') {
            about = new Swiper(aboutContainer, {
                slideClass: 'about-section__info-text',
                wrapperClass: 'about-section__info',
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination",
                },
            });

            aboutContainer.dataset.mobile = 'true';
        };

        if (window.innerWidth > 600) {
            aboutContainer.dataset.mobile = 'false';
            if (aboutContainer.classList.contains('swiper-container-initialized')) {
                about.destroy()
            };
        };
    };

    window.addEventListener('resize', () => {
        mobileSlider();
    })

    mobileSlider();
};

// === MAIN GOODS SLIDER ===

let mainGoods = new Swiper(".main-goods__slider", {
    slideClass: 'main-goods__item',
    wrapperClass: 'main-goods__wrapper',
    spaceBetween: 28,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    initialSlide: 1,
    breakpoints: {
        1150: {
            spaceBetween: 28,
            slidesPerView: 4,
        },

        1000: {
            spaceBetween: 20,
            slidesPerView: 'auto',
        },

        500: {
            spaceBetween: 10,
            slidesPerView: 'auto',
        },

        0: {
            spaceBetween: 5,
            slidesPerView: 'auto',
            centeredSlides: true,
        }
    }
});

// === PRODUCT ONE ===

let product = new Swiper(".product__gallery", {
    slideClass: 'product__slide',
    wrapperClass: 'product__slider',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.querySelectorAll('.product__wish').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('product__wish--selected');
    })
});

// === SHOW MORE TEXT ===

if (document.querySelector('.product__description-text')) {
    const text = document.querySelectorAll('.product__description-text')

    text.forEach(function (item) {
        const btn = item.querySelector('.product__description-btn');

        btn.addEventListener('click', function () {
            if (!item.classList.contains('show-text')) {
                item.classList.add('show-text')
            }
        })
    });
};

// === CATEGORY RANGE SLIDER ===

const rangeSlider = document.querySelector('.category-price__slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [100, 99999],
        connect: true,
        step: 1,
        range: {
            'min': [100],
            'max': [99999]
        }
    });

    const input0 = document.querySelector('#input-0');
    const input1 = document.querySelector('#input-1');

    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle])
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        rangeSlider.noUiSlider.set(arr)
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });
};

// === CATEGORY MOVILE ===

const categoryBtn = document.querySelector('.category__mobile-btn');

if (categoryBtn) {
    categoryBtn.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.category').classList.toggle('category--active')
    });
};

// === PHONE MASK ===

const element = document.getElementById('input__phone');

if (element) {
    const maskOptions = {
        mask: '+380 (00) 000-00-00',
        lazy: false,
    };
    const mask = IMask(element, maskOptions);
};

// === BASKET ===

if (document.querySelector('.basket')) {
    const basket = document.querySelectorAll('.basket-product');

    basket.forEach(function(item) {

        const basketMinus = item.querySelector('.basket-count__btn--minus'),
             basketPlus = item.querySelector('.basket-count__btn--plus'),
             basketInput = item.querySelector('.basket-count__input'),
             basketPrice = item.querySelector('.basket-product__price-num');

        const startPrice = basketPrice.textContent;

        let price = +basketPrice.textContent;

        basketPrice.textContent = Math.round(price*basketInput.value);

        basketPlus.addEventListener('click', () => {
            basketInput.value++;
            basketPrice.textContent = Math.round(price*basketInput.value);
        });

        basketMinus.addEventListener('click', (e) => {
            basketInput.value--;
            if (basketInput.value < 1) {
                basketInput.value = 1;
                item.remove();
            }

            basketPrice.textContent = Math.round(+basketPrice.textContent - +startPrice);

            if (!document.querySelector('.basket-product')) {
                document.querySelector('.basket__content').remove();
                document.querySelector('.basket__subtitle').style.display = 'block';
                document.querySelector('.breadcrumbs').remove();
            }
        });

    });

    const basketBtn = document.querySelectorAll('.basket-count__btn');

    basketBtn.forEach(function(item) {
        item.addEventListener('click', function() {
            calcSum();
        });
    });

    calcSum();

}

function calcSum() {
    const priceGoods = document.querySelectorAll('.basket-product__price-num');
    if (priceGoods) {
        let sum = 0;
        for (let i = 0; i < priceGoods.length; i++) {
            sum = sum + +priceGoods[i].textContent;
        }
        if (document.querySelector('.basket__total-num')) {
            document.querySelector('.basket__total-num').textContent = sum;
        }
    }
}

// === AOS ===

AOS.init({
    // duration: 800,
    duration: 0,
    offset: 130,
    once: true,
});