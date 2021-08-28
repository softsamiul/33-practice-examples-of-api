const getApi = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
getApi();
const displayQuotes = (singleQuote) => {
    const quotesElement = document.getElementById('quote');

    quotesElement.innerText = singleQuote.quote;
}