var bitcoinRowCounterRank = 0;
var bitcoinRowCounterPropName = 0;
var bitcoinRowCounterMarketCap = 0;
var bitcoinRowCounterPrice = 0;
var bitcoinRowCounterVolume = 0;

var ethereumRowCounterRank = 1;
var ethereumRowCounterPropName = 1;
var ethereumRowCounterMarketCap = 1;
var ethereumRowCounterPrice = 1;
var ethereumRowCounterVolume = 1;

var firstRowList = document.querySelector('.tr-test');
var secondRowList = document.querySelector('.tr-test2');

//-----------------------------work with api--------------------------------//

setInterval(function loadData() {
    var httpRequest = new XMLHttpRequest();
    var url = 'https://api.coinmarketcap.com/v1/ticker/';
    httpRequest.open('GET', url);

    httpRequest.onload = function () {
        var ourData = JSON.parse(httpRequest.responseText);

        var firstRow = '';
        firstRow += '<td>' + ourData[bitcoinRowCounterRank].rank + '</td>';
        firstRow += '<td class="zzz">' + ourData[bitcoinRowCounterPropName].name + '</td>';
        firstRow += '<td>' + '$' + ourData[bitcoinRowCounterMarketCap].market_cap_usd + '</td>';
        firstRow += '<td>' + '$' + ourData[bitcoinRowCounterPrice].price_usd + '</td>';
        firstRow += '<td>' + '$' + ourData[bitcoinRowCounterVolume]['24h_volume_usd'] + '</td>';

        var secondRow = '';
        secondRow += '<td>' + ourData[ethereumRowCounterRank].rank + '</td>';
        secondRow += '<td class="zzz1">' + ourData[ethereumRowCounterPropName].name + '</td>';
        secondRow += '<td>' + '$' + ourData[ethereumRowCounterMarketCap].market_cap_usd + '</td>';
        secondRow += '<td>' + '$' + ourData[ethereumRowCounterPrice].price_usd + '</td>';
        secondRow += '<td>' + '$' + ourData[ethereumRowCounterVolume]['24h_volume_usd'] + '</td>';


        firstRowList.insertAdjacentHTML('beforeend', firstRow);
        secondRowList.insertAdjacentHTML('beforeend', secondRow);
    };

    httpRequest.send();
}, 10000);

//---------------------------deleting data from a table-----------------------//

setInterval(function () {
    $('td').remove();
}, 10000);


//----------------------------smooth scroll to blocks-----------------------------//

$(document).ready(function () {
    $('.about, .market').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html').animate({ scrollTop: destination-75}, 1000);
    });
});