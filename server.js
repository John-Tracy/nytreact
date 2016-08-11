var bodyParser = require('body-parser');
var request = require('request');
// api stuff for ny times


request.get({
  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  qs: {
    'api-key': "51e97822ecd646c0b8a6b7f0999fd3e6",
    'q': "trump",
    'begin_date': "20160710",
    'end_date': "20160808"
  },
}, function(err, response, body) {
	newBody = JSON.parse(body)
 	console.log(newBody.response.docs[0]);
  
})