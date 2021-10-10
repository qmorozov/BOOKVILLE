// === CARD WISH ===

document.querySelectorAll('.card__wish').forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('card__wish--choose');
    })
})

// === CARD BUY BTN ===

document.querySelectorAll('.card__buy-btn').forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('card__buy-btn--choose');
    })
})
