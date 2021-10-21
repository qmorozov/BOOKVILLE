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

// === CARD BUY BTN ===

document.querySelectorAll('.card__buy-btn').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('card__buy-btn--choose');
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

const choices = new Choices("select", {
    searchEnabled: false,
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

let introSlider = new Swiper(".intro-slider", {
    slideClass: 'intro-item',
    wrapperClass: 'intro-items',
    speed: 1000,
    loop: true,
    autoplay: true,
    autoplay: {
        delay: 7000,
    },
    grabCursor: true,
    effect: "fade",
    navigation: {
        nextEl: ".intro-slider-next",
        prevEl: ".intro-slider-prev",
    },
});

// === SLIDER ABOUT ===

const aboutContainer = document.querySelector('.about-slider');

let about;

function mobileSlider() {
    if (window.innerWidth <= 600 && aboutContainer.dataset.mobile === 'false') {
        about = new Swiper(aboutContainer, {
            slideClass: 'about-info__text',
            wrapperClass: 'about-info',
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