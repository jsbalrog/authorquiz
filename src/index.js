import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import _ from 'lodash';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'The Adventures of Huckleberry Finn',
            'Roughing It',
            'Life on the Mississippi',
        ]
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'Heart of Darkness',
            'Lord Jim',
            'The Lagoon',
        ]
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'Harry Potter and the Sorcerer\'s Stone' ,
            'Harry Potter and the Goblet of Fire',
            'Harry Potter and the Half-Blood Prince',
        ]
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'A Tale of Two Cities',
            'Bleak House',
            'A Christmas Carol',
        ]
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'Twelfth Night',
            'As You Like It',
            'The Taming of the Shrew',
        ]
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'It',
            'Cujo',
            'The Shining',
        ]
    },
];

function getTurnData(authors) {
    // Get all the books from all the authors
    const allBooks = authors.reduce(function(a, c) {
        return a.concat(c.books);
    }, []);
    // Grab four random books from all the books
    const fourRandomBooks = _.shuffle(allBooks).slice(0,4);
    // Randomly grab one of the four to test against
    const answer = _.sample(fourRandomBooks);

    // Return the four, plus go find the author of the answer book and return it as well
    return {
        books: fourRandomBooks,
        author: authors.find((author) =>
            author.books.some((title) =>
                title === answer))
    };
}

const state = {
    turnData: getTurnData(authors),
};

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root')); // state spreads to actually be the turnData property

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
