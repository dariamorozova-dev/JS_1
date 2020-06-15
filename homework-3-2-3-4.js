'use strict';
//задание 2

for (let i = 0; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log(i + ' - это чётное число');
    } else {
        console.log(i + ' - это нечётное число');
    }
}

//задание 3

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        }
    ]
}

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//задание 4

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    }
];

products.forEach(function (element) {
    element.price = element.price - (element.price * 0.15)
})

console.log(products);