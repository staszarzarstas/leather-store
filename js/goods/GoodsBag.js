
const chairs = [
	{
		"id": "02",
		"title": "Большая дорожная кожаная сумка 'Мумбаи'",
		"art": 288528,
		"price": 1450,
		"text": "Натуральная кожанная сумка, прочный ремень.",
		"imgSrc": "sumka(1).jpg"
	},
	{
		"id": "05",
		"title": "Дорожная сумка 'Варшава'",
		"art": 282388,
		"price": 1200,
		"text": "Дорожная кожаная сумка средних размеров.",
		"imgSrc": "chair(2).png"
	},
	{
		"id": "01",
		"title": "Кожаный рюкзак 'Алтай'",
		"art": 8952,
		"price": 1900,
		"text": "Рюкзак вместительный и очень удобный. Имеет большой карман и карман на молнии.",
		"imgSrc": "chair(1).png"
	},
	{
		"id": "04",
		"title": "Кожаный рюкзак 'Стокгольм'",
		"art": 952044,
		"price": 2300,
		"text": "Вместительный кожаный рюкзак с молнией в классическом дизайне.",
		"imgSrc": "chair(4).png"
	},
	{
		"id": "03",
		"title": "Кожаный рюкзак - скрутка 'Прага'",
		"art": 245678,
		"price": 1900,
		"text": "Рюкзак - скрутка из натуральной телячьей кожи.",
		"imgSrc": "chair(5).png"
	},
	{
		"id": "08",
		"title": "Женский кожаный рюкзак 'Рио'",
		"art": 95348,
		"price": 2200,
		"text": "Женский рюкзак из натуральной плотной кожи.",
		"imgSrc": "chair(8).png"
	},
	{
		"id": "10",
		"title": "Кожаная сумка на плечо 'Comfi'",
		"art": 24856388,
		"price": 3300,
		"text": "Небольшая кожаная сумка на плечо будет удобна в повседневной жизни.",
		"imgSrc": "chair(10).png"
	},
	{
		"id": "07",
		"title": "Сумка мужская кожаная 'Deli'",
		"art": 2828528,
		"price": 3000,
		"text": "В нее поместится все необходимое, что нужно деловому человеку и даже немного больше.",
		"imgSrc": "chair(7).png"
	},
	{
		"id": "06",
		"title": "Сумка через плечо'Arto'",
		"art": 2885248,
		"price": 3900,
		"text": "Компактная сумка через плечо - идеальное решение для хранения основных вещей. ",
		"imgSrc": "chair(6).png"
	},
	{
		"id": "09",
		"title": "Сумка кожаная на плечо 'Portu'",
		"art": 289858,
		"price": 5300,
		"text": "Будьте в тренде с этой элегантной кожаной сумкой",
		"imgSrc": "chair(9).png"
	}
]


let cardItem = ''
//title__inline input-short
// <div class="items__current" data-counter>1</div>
let chairCard = document.getElementById('chairCard')
chairs.forEach ((chair) => {
    cardItem +=
    `

    <div class="products-item" data-id="${chair.id}">
                    <div class="products-item-img"> 
                        <img src="./img/items/chairs/${chair.imgSrc}" alt="Упс..." class="productImg">
                    </div>

                    <div class="products-item-title ">${chair.title}</div>
                    <div class="price__weight">арт: ${chair.art}</div>
                    <div class="products-item-text">${chair.text}</div>

                    <div class="details-wrapper">
                        <div class="items counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${chair.price} ₽</div>
                        </div>
                    </div>

                    <div class="products-action">
                        <button data-cart class="button glow-on-hover product-button"> В корзину</button>
                    </div>
					<div class="price__weight">Добавлено: ${dataUpdate}</div>
                </div>

    `
})
chairCard.insertAdjacentHTML('beforeend', cardItem);


