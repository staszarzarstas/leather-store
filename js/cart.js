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


const cartWrapper =  document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {

		const card = event.target.closest('.products-item');

		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.productImg').getAttribute('src'),
			title: card.querySelector('.products-item-title').innerText,
			art: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};


		// // Проверять если ли уже такой товар в корзине
		// const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		// // Если товар есть в корзине
		// if (itemInCart) {
		// 	const counterElement = itemInCart.querySelector('[data-counter]');
		// 	counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		// } else {
		// 	// Если товара нет в корзине

			const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.art} </div>

										<div class="cart-item__details">
											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>
											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>
										</div>
									</div>
								</div>
							</div>`;

			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}

		// // Сбрасываем счетчик добавленного товара на "1"
		// card.querySelector('[data-counter]').innerText = '1';

		// // Отображение статуса корзины Пустая / Полная
		// toggleCartStatus();

		// // Пересчет общей стоимости товаров в корзине
		// calcCartPriceAndDelivery();

	//}
});
