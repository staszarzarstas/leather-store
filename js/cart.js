const cartButton = document.querySelector('.cartIcon')
const cartFrame = document.querySelector('.showCart')
const close = document.querySelector('.cancel')

cartButton.addEventListener('click', function (){
    cartFrame.classList.toggle('visible')
})

close.addEventListener('click', function () {
    cartFrame.classList.remove('visible')
})

window.addEventListener('click', function (event) {

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
	}

	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	if (event.target.dataset.action === 'minus') {

		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		// } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
		// 	// Проверка на товар который находится в корзине
		// 	console.log('IN CART!!!!');
		// 	// Удаляем товар из корзины
		// 	event.target.closest('.cart-item').remove();

		// 	// Отображение статуса корзины Пустая / Полная
		// 	toggleCartStatus();

		// 	// Пересчет общей стоимости товаров в корзине
		// 	calcCartPriceAndDelivery();
		}

	}

	// // Проверяем клик на + или - внутри коризины
	// if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
	// 	// Пересчет общей стоимости товаров в корзине
	// 	calcCartPriceAndDelivery();
	// }
});