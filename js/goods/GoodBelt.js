const armchairs = [
	{
		"id": "002",
		"title": "Брючный кожаный прошитый ремень 'Кувейт'",
		"art": 27546,
		"price": 2350,
		"text": "Ремень для брюк из натуральной кожи из 3-х слоев кожи, прошитый прочным швом.",
		"imgSrc": "armchair(10).png"
	},
	{
		"id": "005",
		"title": "Брючный кожаный прошитый ремень 'Канкун'",
		"art": 28567,
		"price": 2350,
		"text": "Ремень для брюк из натуральной кожи из 3-х слоев кожи, прошитый прочным швом.",
		"imgSrc": "armchair(8).png"
	},
	{
		"id": "001",
		"title": "Кожаный ремень 'Сингапур'",
		"art": 856549,
		"price": 2350,
		"text": "Наш ремень изготовлен исключительно из 100% натуральной кожи, чтобы обеспечить его долговечность и качество.",
		"imgSrc": "armchair(6).png"
	},
	{
		"id": "004",
		"title": "Кожаный ремень 'Королев'",
		"art": 9526,
		"price": 2350,
		"text": "Ремень сделан из 100% натуральной кожи. Кожа для ремня вырезана из цельного куска плотной кожи. ",
		"imgSrc": "armchair(7).png"
	},
	{
		"id": "003",
		"title": "Кожаный ремень 'Бургас'",
		"art": 245858,
		"price": 3500,
		"text": "материал - 100% натуральная кожа. ",
		"imgSrc": "armchair(3).png"
	},
	{
		"id": "008",
		"title": "Кожаный ремень 'Dreams'",
		"art": 6633,
		"price": 4800,
		"text": "Кожаный ремень 'Dreams' - надежный выбор для стильных мужчин.",
		"imgSrc": "armchair(9).png"
	},
	{
		"id": "010",
		"title": "Прошитый кожаный ремень для джинсов 'Vladimir'",
		"art": 24895,
		"price": 4300,
		"text": "Естественная красота кожи: Ремень 'Vladimir' имеет натуральную поверхность кожи ",
		"imgSrc": "armchair(5).png"
	},
	{
		"id": "007",
		"title": "Кожаный ремень 'Кемер'",
		"art": 26435,
		"price": 6300,
		"text": "Этот ремень изготовлен из 100% натуральной кожи, которая была вырезана из цельного куска плотной кожи.",
		"imgSrc": "armchair(4).png"
	},
	{
		"id": "006",
		"title": "Кожаный ремень 'Кембридж",
		"art": 2222,
		"price": 1900,
		"text": "Это не просто кожаный ремень.Кожа из которой сделан ремень - это ЛЕГЕНДА!",
		"imgSrc": "armchair(2).png"
	},
	{
		"id": "009",
		"title": "Прошитый кожаный ремень 'Финикс'",
		"art": 2925,
		"price": 2300,
		"text": "Ремень сделан из 100% натуральной кожи. Кожа для ремня вырезана из цельного куска плотной кожи.",
		"imgSrc": "armchair(1).png"
	}
]


let armchairItem = ''

let armItem = document.getElementById('armchairCard')
armchairs.forEach ((armchair) => {
    armchairItem +=
    `
	<div class="products-item" data-id="${armchair.id}">
		<div class="products-item-img"> 
			<img src="./img/items/armchairs/${armchair.imgSrc}" alt="Упс..." class="productImg">
		</div>

		<div class="products-item-title ">${armchair.title}</div>
		<div class="price__weight">арт: ${armchair.art}</div>
		<div class="products-item-text">${armchair.text}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>

			<div class="price">
				<div class="price__currency">${armchair.price} ₽</div>
			</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button" type="button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
	</div>

    `
})
armItem.insertAdjacentHTML('beforeend', armchairItem);