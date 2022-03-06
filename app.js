function updateProductNumber(product, price, isIncrease) {
    //update product number
    const productInput = document.getElementById(product + '-input');
    const productNumber = productInput.value;
    if (isIncrease == true) {
        productInput.value = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productInput.value = parseInt(productNumber) - 1;
    }
    //update product total price
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput.value * price;

    //call for calculate total
    calculateTotal();
}
//get input value
function getInputValue(product) {
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
//calculate total
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1200;
    const caseTotal = getInputValue('case') * 50;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal * 0.1;
    const total = subTotal + tax;
    //update on page
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

//Event handle for phone plus & minus
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1200, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1200, false);
});

//Events handle for case plus & minus
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 50, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 50, false);
});