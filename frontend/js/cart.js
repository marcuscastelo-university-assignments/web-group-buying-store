$(document).ready(function () {

    $('.quantity-right-plus').click(function (e) {
        e.preventDefault();
        updateQuantity(this, +1)
    });

    $('.quantity-left-minus').click(function (e) {
        e.preventDefault();
        updateQuantity(this, -1)
    });

    function updateQuantity(caller, delta) {
        let cardParent = $(caller).parent().parent().parent();
        let quantityField = cardParent.find('.quantity');
        let newQuant = Math.max(1, parseInt(quantityField.val()) + delta);
        quantityField.val(newQuant);
        cardParent.find('span.quantity .value').html(newQuant);
        let price = parseInt(cardParent.find('span.cart-item-price .value').html())
        cardParent.find('.cart-item-total .value').html(newQuant * price)
    }

});