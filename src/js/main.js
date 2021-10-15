// === CARD WISH ===

document.querySelectorAll('.card__wish').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('card__wish--choose')
    })
})

// === CARD BUY BTN ===

document.querySelectorAll('.card__buy-btn').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('card__buy-btn--choose')
    })
})

// === SEARCH BUTTON ===

const searchForm = document.querySelector('.search')
const searchBtn = document.querySelector('.header__item--search')

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    searchForm.classList.toggle('search--active')
})

window.addEventListener('click', (e) => {
    if (!e.target.closest('.search') && !e.target.closest('.header__item--search')) {
        searchForm.classList.remove('search--active')
    } else if (e.target.closest('.search-form__button--close')) {
        e.preventDefault()
        searchForm.classList.remove('search--active')
    }
})

// === SELECT ===

const choices = new Choices("select", {
    searchEnabled: false,
})

// === DROPDOWN ===

const submenu = document.querySelector('.header-submenu')
const dropdown = document.querySelector('.dropdown')
const menuList = document.querySelector('.menu__list')

submenu.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active')
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.header-submenu') && !e.target.closest('.dropdown')) {
        menuList.classList.remove('menu__list--active')
    }
})
