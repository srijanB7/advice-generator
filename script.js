const quoteHolder = document.querySelector(".quote");
const getQuoteBtn = document.querySelector(".btn");
const adviceHeading = document.querySelector('.advice-heading');

const url = "https://api.adviceslip.com/advice";

const updateQuote = ({id, advice}) => {
    
    adviceHeading.innerText = `Advice # ${id}`;
    quoteHolder.innerText = advice;
}

const getQuote = () => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.slip);
            updateQuote(data.slip);
        });
};
getQuoteBtn.addEventListener('click', getQuote);

