var fs = require('fs');
var cheerio = require('cheerio');

var content = fs.readFileSync('../week_01/data/m09.txt');

var $ = cheerio.load(content, {xml:{normalizeWhitespace:true} });
   

$('td:nth-child(1)').each(function(i,elem) {

//    if ( $(this).find('br').length ) {
//        $(this).find('br').removeAttr('detailsBox','span');
//    }
        console.log($(elem).text());
});

