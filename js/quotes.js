const loadQuote = () =>{
   fetch('https://api.kanye.rest/')
   .then(res => res.json())
   .then(data => console.log(data))
}
const displayQuote = quote =>{
const blockQuote = document.getElementById('quote');
blockQuote.innerHTML = quote.quote;
}


loadQuote();