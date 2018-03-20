var quoteDiv = document.querySelector('#quote');
var twitterButton = document.querySelector('#twitter-button');
var tumblerButton = document.querySelector('#tumbler-button');
var getQuoteButton = document.querySelector('#get-quote-button');

getQuoteButton.addEventListener("click", get_quote());

//var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
function get_quote() {
  var requestURL = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    var quote = request.response;
    populateQuoteDiv(quote);
  }
}

function populateQuoteDiv(jsonObj) {
  quoteDiv.textContent = jsonObj['quoteText'];
  //header.appendChild(myH1);
}