document.addEventListener('DOMContentLoaded', () => {

    //Card options
    const cardArray = [
        {
            name: 'bear',
            img: '../images/bear.jpg'
        },
        {
            name: 'bear',
            img: '../images/bear.jpg'
        },
        {
            name: 'elefant',
            img: '../images/elefant.jpg'
        },
        {
            name: 'elefant',
            img: '../images/elefant.jpg'
        },
        {
            name: 'giraff',
            img: '../images/giraff.jpg'
        },
        {
            name: 'giraff',
            img: '../images/giraff.jpg'
        },
        {
            name: 'grizzly',
            img: '../images/grizzly.jpg'
        },
        {
            name: 'grizzly',
            img: '../images/grizzly.jpg'
        },
        {
            name: 'hippo',
            img: '../images/hippo.jpg'
        },
        {
            name: 'hippo',
            img: '../images/hippo.jpg'
        },
        {
            name: 'koala',
            img: '../images/koala.jpg'
        },
        {
            name: 'koala',
            img: '../images/koala.jpg'
        },
        
    ];

    const cardBox = document.querySelector('.card-box');

    //create board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', './images/back.jpg');
            card.setAttribute('data-id', i);
            card.setAttribute('class', 'card');
            //card.addEventListener('click', flipcard);
            cardBox.appendChild(card)
        }
    }

    createBoard();
});