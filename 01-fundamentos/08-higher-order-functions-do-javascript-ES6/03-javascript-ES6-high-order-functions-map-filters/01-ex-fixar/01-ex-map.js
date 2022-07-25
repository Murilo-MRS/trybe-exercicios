const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productPricelist = (productsList, priceList) => productsList.map((product, index) => {
    const productPrice = {};
    productPrice.product = product;
    productPrice.price = priceList[index];
    return productPrice;
});

console.log(productPricelist(products, prices));