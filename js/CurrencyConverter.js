//пересчёт валют

const currency = document.querySelector('#changeCurrency')
const prices = document.getElementsByClassName('item-price')

currency.addEventListener('click', function (e) {
    let currectCurrency = e.target.innerText
    let newCurrency = '₽'
    let coeff

    if (currectCurrency === '₽') {
        newCurrency = '$';
        coeff = 0.77;
    } else if (currectCurrency === '$') {
        newCurrency = '€';
        coeff = 0.9;
    } else if (currectCurrency === '€') {
        newCurrency = '¥';
        coeff = 7.2;
    } else if (currectCurrency === '¥') {
        newCurrency = '₽';
        coeff = 80;
    }

    e.target.innerText = newCurrency
    
    for (let i = 0; i < prices.length; i++){
        prices[i].innerText = +(prices[i].getAttribute('data-base') * coeff).toFixed(1) + ' ' + newCurrency
    }
    
})