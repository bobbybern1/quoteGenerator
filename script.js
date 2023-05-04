const categories = "age alone amazing anger architecture art attitude beauty best birthday business car change communications computers cool courage dad dating death design dreams education environmental equality experience failure faith family famous fear fitness food forgiveness freedom friendship funny future god good government graduation great happiness health history home hope humor imagination inspirational intelligence jealousy knowledge leadership learning legal life love marriage medical men mom money morning movies success";
const baseUrl = "https://api.api-ninjas.com/v1/quotes?category=";
const apiKey = "oyFKjeXLHqyR55mVhPrCOg==BpfAqoo0jYDg33vu";
const categorySelect = document.querySelector('.categories');
const getQuoteBtn = document.querySelector('#getQuote');

const main = document.querySelector('.main');
const front = document.querySelector('.form');
const back = document.querySelector('.quoteDisplay');


// create option for each category
const quoteCategories = categories.split(' ');
quoteCategories.forEach(cat => {
    // create form for each category
    const option = document.createElement('option');
    // capitalize first letter for each option in innerText 
    const Cat = cat.charAt(0);
    const CAT = Cat.toUpperCase();
    const remainingLetters = cat.slice(1);
    option.innerText = `${CAT}${remainingLetters}`;
    option.value = cat;
    categorySelect.appendChild(option); 
});

getQuoteBtn.addEventListener('submit', (event) => {
    event.preventDefault();
    selectedOption = categorySelect.value;
    getQuote(selectedOption);

    front.classList.toggle('flipped')
    back.classList.toggle('flipped')
})


const getQuote = async (selectedOption) => {


    const category = selectedOption;
    const urlToFetct = `${baseUrl}${category}`;
    let options = {
        method: 'GET',
        headers: { 'x-api-key': `${apiKey}` }
    }


    await fetch(urlToFetct,options)
    .then(response => response.json())
    .then(data => {
        //   returns random quote
        displayQuote(data);
    }).catch(error => {
        alert(error);
    })
}

const displayQuote = (data) => {
    const author = data[0].author;
    const quote = (data[0].quote);

    // change to innerHTML so the buttons appear with quote
    document.querySelector('.author').innerText = `-${author}`;
    document.querySelector('.quote').innerText = `"${quote}"`;
}



function flipBack() {
    front.classList.toggle('flipped');
    back.classList.toggle('flipped');
}

function newQuote() {
    getQuote(selectedOption); 
}