var quoteDiv = document.querySelector('#quote');
var authorSpan = document.querySelector('#authorSpan')
var twitterButton = document.querySelector('#twitter-button');
var tumblerButton = document.querySelector('#tumbler-button');
var getQuoteButton = document.querySelector('#get-quote-button');

getQuoteButton.addEventListener("click", get_quote);

/**
 * This function is great!! 
 */
function get_quote() {
  var requestURL = "https://cors.io/?https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    var quote = request.response;
    populateQuoteDiv(quote);
    populateAuthorSpan(quote);
  }
}
function populateAuthorSpan(jsonObj) { 
  authorSpan.innerHTML = jsonObj['quoteAuthor'];
 }
function populateQuoteDiv(jsonObj) {
  quoteDiv.innerHTML = jsonObj['quoteText'];
}