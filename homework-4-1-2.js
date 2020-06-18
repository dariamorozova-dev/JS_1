'use strict';

//задание 1.2 es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(newText) {
    this.text = newText;
}

let post1 = new Post('Mary', 'text', '05-05-2020');

post1.edit('new-text');

console.log(post1);

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHiglighted = function() {
    this.highlighted = true;
}

let post2 = new AttachedPost('Andy', 'text-2', '06-06-2020');

console.log(post2);

post2.makeTextHiglighted();

console.log(post2);

post2.edit('test-test');
console.log(post2); AttachedPost;

//es6

class PostES6 {
    constructor(authorES6, textES6, dateES6) {
        this.authorES6 = authorES6;
        this.textES6 = textES6;
        this.dateES6 = dateES6;
    }

    editES6(newTextES6) {
        this.textES6 = newTextES6;
    }
}

const postES6List = [
    new PostES6('Sandy', 'hi everyone', '10-06-2020'),
    new PostES6('Candy', 'ciao a tutti', '11-06-2020'),
    new PostES6('Paolo', 'salut tout le monde', '12-06-2020'),
    new PostES6('Cesare', 'hola a todos', '13-06-2020'),
    new PostES6('Flora', 'guten tag', '14-06-2020'),
]

console.log(postES6List);
console.log(postES6List[3].editES6('vsem privet'));

class AttachedPostES6 extends PostES6 {
    constructor(authorES6, textES6, dateES6) {
        super(authorES6, textES6, dateES6);
        this.highlightedES6 = false;
    }

    makeTextHiglightedES6() {
        this.highlightedES6 = true;
    }
}

const attachedPostES6List = [
    new AttachedPostES6('Ivan', 'privet', '15-06-2020'),
    new AttachedPostES6('Marco', 'sayonara', '16-06-2020'),
]

console.log(attachedPostES6List);
attachedPostES6List[1].editES6('stariy text doloy!');
console.log(attachedPostES6List[1]);
attachedPostES6List[1].makeTextHiglightedES6();
console.log(attachedPostES6List[1]);

