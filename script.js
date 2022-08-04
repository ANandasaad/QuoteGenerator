// variable

let Btn= document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');


const quotes=[{

    quote:`"The purpose of our lives is to be happy."`,
    person:`Dalai Lama`
},
{
    quote:`"Life is what happens when you're busy making other plans."`,
    person:`John`
},
{
    quote:`"Get busy living or get busy dying."`,
    person:`Stephen King`

},
];

Btn.addEventListener('click', function(){
    let random= Math.floor(Math.random()* quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})