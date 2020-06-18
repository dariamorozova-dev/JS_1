'use strict';

//задание 1.1 es5

function Product(name, price) {
    this.name = name;
    this.price = price;
    // this.make25PercentDiscount = function() {
    //     this.price = this.price - (this.price * 0,25);
    // };
}

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - (this.price * 0,25);
};

const productList = [
    new Product ('product-1', 100),
    new Product ('product-2', 200),
    new Product ('product-3', 300),
    new Product ('product-4', 400),
    new Product ('product-5', 500),
    new Product ('product-6', 600),
]

console.log(productList);

console.log(productList[3]);

productList[3].make25PercentDiscount();

console.log(productList[3]);

//es6

class ProductES6 {
    constructor(nameES6, priceES6) {
        this.nameES6 = nameES6;
        this.priceES6 = priceES6;
    }

    make25PercentDiscountES6() {
        this.priceES6 = this.priceES6 - (this.priceES6 * 0,25);
    }
}

const productListES6 = [
    new ProductES6 ('product-01', 100),
    new ProductES6 ('product-10', 200),
    new ProductES6 ('product-11', 300),
    new ProductES6 ('product-100', 400),
]

console.log(productListES6);

console.log(productListES6[3]);

productListES6[3].make25PercentDiscountES6();

console.log(productListES6[3]);