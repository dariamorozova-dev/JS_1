'use strict';

//задание 5

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    }
];

const productsWithPhoto = products.filter(product => 'photos' in product && product.photos.length > 0);

console.log(productsWithPhoto);

products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    // a должно быть равным b
    return 0;
});

console.log(products);

//задание 6

for (let i = 0; i < 10; console.log(i++));

//задание 7

for (let star = ''; star.length <= 20; console.log(star += '*'));