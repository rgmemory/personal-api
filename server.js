
var bodyParser = require('body-parser');
var express = require('express');

var app = express();


app.use(express.static('assests'));
app.use(bodyParser.json());




/////////////////////////////////////


var express = require('express');
var bodyParser = require('body-parser');

let port = 5000;
let app = express();



let button = document.querySelector('button');
button.addEventListener('click', () => {
  let term = document.querySelector('input').value;
  $.get('http://localhost:5000/api/search?term=' + term)
  .done(result => {
    document.write(result);
  })
});






app.route('/api/search')
  .get((req, res) =>{
  let searchTerm = req.query.term;
  res.json('the search term is invalid')
})

app.listen(port, () => console.log('listening on port 5000'))
