
const kitchens = [
	{
		"id": "2",
		"title": "Кожаная сумка для ноутбука 'Орландо'",
		"art": 28528,
		"price": 7435,
		"text": "Сумка, специально разработанная для деловых женщин, предназначена для удобной переноски ноутбука и документов.",
		"imgSrc": "kitchen(18).png"
	},
	{
		"id": "5",
		"title": "Кожаная женская сумка 'Коста-Рика'",
		"art": 288288,
		"price": 3230,
		"text": "Кожаная женская сумка 'Коста-Рика' - это стильная и практичная сумка через плечо, изготовленная из плотной телячьей кожи.",
		"imgSrc": "kitchen(16).png"
	},
	{
		"id": "1",
		"title": "Женская маленькая сумка 'Малибу'",
		"art": 8588952,
		"price": 3900,
		"text": "Женская сумочка из плотной кожи. Сделана без единого шва.",
		"imgSrc": "kitchen(15).png"
	},
	{
		"id": "4",
		"title": "Кожаный блокнот 'Амстердам' А5",
		"art": 928854,
		"price": 4300,
		"text": "Блокнот на кольцах с обложкой из натуральной кожи, формата А5 (15-21см).",
		"imgSrc": "kitchen(13).png"
	},
	{
		"id": "3",
		"title": "Блокнот А5 на кольцах 'Монтевидео'",
		"art": 24876,
		"price": 5100,
		"text": "Этот блокнот - король среди блокнотов. Статусный, классического дизайна и немного брутальный. ",
		"imgSrc": "kitchen(14).png"
	},
	{
		"id": "8",
		"title": "Блокнот «Ливерпуль» формата А6",
		"art": 958328,
		"price": 4450,
		"text": "Блокнот «Ливерпуль» формата А6: Стиль и функциональность в одном",
		"imgSrc": "kitchen(19).png"
	},
	{
		"id": "0",
		"title": "Мини- блокнот 'Омск' А7",
		"art": 246388,
		"price": 5120,
		"text": "Мини-блокнот - идеальное решение для тех, кто ценит каждый квадратный сантиметр в своей сумочке.",
		"imgSrc": "kitchen(21).png"
	},
	{
		"id": "7",
		"title": "Клатч-конверт кожаный 'Неаполь'",
		"art": 2828528,
		"price": 4680,
		"text": "Удобный и стильный клатч для путешествий: ваш надежный спутник.",
		"imgSrc": "kitchen(23).png"
	},
	{
		"id": "6",
		"title": "Блокнот кожаный на кольцах А5 'Монреаль'",
		"art": 288382248,
		"price": 6730,
		"text": "Листы плотные и прочные, что позволяет блокноту сохранять свою форму и делать записи даже на ходу.",
		"imgSrc": "kitchen(20).png"
	},
	{
		"id": "9",
		"title": "Блокнот- тетрадь А5 'Лиссабон'",
		"art": 2722858,
		"price": 8130,
		"text": " Внутри тетради вы найдете два кармана, идеально подходящих для хранения карточек и документов.",
		"imgSrc": "kitchen(12).png"
	},
    {
		"id": "94",
		"title": "Кожаный пенал 'Ванкувер'",
		"art": 2722858,
		"price": 7830,
		"text": "Пенал очень удобный в использовании. Можно положить ручки и карандаши.",
		"imgSrc": "kitchen(22).png"
	}
]


let kitchenItem = ''

let kitchenCard = document.getElementById('kitchenCard')
kitchens.forEach ((kitchen) => {
    kitchenItem +=
    `
	<div class="products-item" data-id="${kitchen.id}">
		<div class="products-item-img"> 
			<img src="./img/items/kitchen/${kitchen.imgSrc}" alt="Упс..." class="productImg">
		</div>

		<div class="products-item-title ">${kitchen.title}</div>
		<div class="price__weight">арт: ${kitchen.art}</div>
		<div class="products-item-text">${kitchen.text}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>

			<div class="price">
				<div class="price__currency">${kitchen.price} ₽</div>
			</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
	</div>

    `
})
kitchenCard.insertAdjacentHTML('beforeend', kitchenItem);