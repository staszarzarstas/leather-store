
const wardrobes = [
	{
		"id": "2",
		"title": "Кожаный кошелек 'Брюгге' для паспорта",
		"art": 9958,
		"price": 4560,
		"text": "Изготовленный из 100% натуральной кожи, он обещает долговечность и привлекательный внешний вид.",
		"imgSrc": "ward(1).png"
	},
	{
		"id": "5",
		"title": "Кошелек для автодокументов «Бангкок»",
		"art": 2854,
		"price": 3650,
		"text": "Кошелек для автодокументов «Бангкок» - идеальный выбор для автомобилистов, которые ценят стиль.",
		"imgSrc": "ward(5).png"
	},
	{
		"id": "1",
		"title": "Портмоне 'Санкт- Петербург'",
		"art": 818952,
		"price": 7300,
		"text": "Большое кожаное портмоне Санкт-Петербург – это дизайн, проверенный годами.",
		"imgSrc": "ward(4).png"
	},
	{
		"id": "4",
		"title": "Кошелек кожаный бифолд 'Сальвадор'",
		"art": 82784,
		"price": 2350,
		"text": "6 отделений для карточек, 2 отделения для дополнительных отделений под карточки и 1 большое отделение для купюр.",
		"imgSrc": "ward(6).png"
	},
	{
		"id": "3",
		"title": "Картхолдер для автодокументов 'Манчестер'",
		"art": 8828846,
		"price": 6100,
		"text": "Стильный картхолдер для автолюбителей и практичных людей",
		"imgSrc": "ward(9).png"
	},
	{
		"id": "8",
		"title": "Кожаный картхолдер 'Иркутск'",
		"art": 8248,
		"price": 2900,
		"text": "Компактный и тонкий картхолдер с двумя кармашками под карточки и отделением для купюр.",
		"imgSrc": "ward(3).png"
	},
	{
		"id": "0",
		"title": "Кошелек на молнии (зиппер) 'Сургут'",
		"art": 7889568,
		"price": 3300,
		"text": "ДxШxВ: 100x90x20 мм Вес: 30 г",
		"imgSrc": "ward(8).png"
	},
	{
		"id": "7",
		"title": "Картхолдер 'Детройт' для карт и денег",
		"art": 2693988,
		"price": 2200,
		"text": "Картхолдер 'Детройт' - идеальное решение для хранения карт и денег.",
		"imgSrc": "ward(10).png"
	},
	{
		"id": "6",
		"title": "Складной картхолдер 'Коломбо'",
		"art": 952632,
		"price": 3900,
		"text": "Складной картхолдер'Коломбо'- это стильное и практичное решение для тех, кто ценит удобство и функциональность.",
		"imgSrc": "ward(7).png"
	},
	{
		"id": "9",
		"title": "Кошелек кожаный 'Лас-Вегас' для карточек и денег",
		"art": 2763348,
		"price": 5400,
		"text": "Кожаный кошелек 'Лас-Вегас' - стильный аксессуар для хранения карточек и денег.",
		"imgSrc": "ward(2).png"
	}
]


let wardItem = ''

let wardrobeItem = document.getElementById('wardCard')
wardrobes.forEach ((ward) => {
    wardItem +=
    `
	<div class="products-item" data-id="${ward.id}">
		<div class="products-item-img"> 
			<img src="./img/items/wardrobe/${ward.imgSrc}" alt="Упс..." class="productImg">
		</div>

		<div class="products-item-title ">${ward.title}</div>
		<div class="price__weight">арт: ${ward.art}</div>
		<div class="products-item-text">${ward.text}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>

			<div class="price">
				<div class="price__currency">${ward.price} ₽</div>
			</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
	</div>

    `
})
wardrobeItem.insertAdjacentHTML('beforeend', wardItem);

