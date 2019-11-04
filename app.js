// Storing depencies into a variable
var express = require("express");
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

//Storing port number and our full app
var port = 3000;
var app = express();

// STEP 1: Setting up the boilerplate and routing
app.get('/wikipedia', function(req, res){

  // storing URL
  var url = 'https://nl.wikipedia.org/wiki/Phyllotaxis';

  // making HTTP request
  request(url, function(error, response, html){
    if(!error) {
      // res.send(html);
      var $ = cheerio.load(html);
      var data = {
        articleTitle : '',
        articleImg : '',
        articleParagraph : ''
      }
      $ ('#content').filter (function(){
        data.articleTitle = $(this).find('#firstHeading').text();
        data.articleImage = $(this).find('img').first ().attr('src');
        data.articleParagraph = $(this).find('p').first ().text();
      });
      res.send (data);
      fs.writeFile('wiki-output.js', JSON.stringify (data, null, 4), function(err){
        console.log('File written on hard drive');
      });
    }
  });
});

app.get('/imdb', function(req, res){

  // storing URL
  var url = 'https://www.imdb.com/chart/top';

  // making HTTP request
  request(url, function(error, response, html){
    if(!error) {
      // res.send(html);
      var $ = cheerio.load(html);
      var data = [];

      $ ('.lister-list').filter (function(){
        $(this).find('tr').each(function(i, elem){
          data[i] = "''" + $(this).find('.posterColumn').find('img').attr('src') + "''";

        });
      });

      res.send (data);
      fs.writeFile('imdb-output.js', 'var imdb_list = ['+ data +']', function(err){
        console.log('File written on hard drive');
      });
    }
  });
});
//
//

app.get('/hearthpwn', function(req, res){

  // storing URL
  var url = 'https://www.hearthpwn.com/forums/hearthstone-general/general-discussion/85137-the-pepper-thread-share-your-good-vibes?page=5';

  // making HTTP request
  request(url, function(error, response, html){
    if(!error) {
      // res.send(html);
      var $ = cheerio.load(html);
      var data = [];

      $('.listing.listing-comments.p-comments.j-comment-listing').filter (function(){
        $(this).find('li').each(function(index, element){
          data[index] = $(this).find('.p-comment-content').text();
        });
        // data.articleTitle =
        // data.articleTitle = $(this).find('.listing-body').text();
        // data.articleImage = $(this).find('img').first ().attr('src');
        // data.articleParagraph = $(this).find('p').first ().text();
      });

      res.send (data);
      fs.writeFile('hearthpwn-output.js', data, function(err){
        console.log('File written on hard drive');
      });
    }
  });
});

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
