var express = require('express')
var app = express();
var router = express.Router()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}))
router.get('/', function(req, res) {
  res.send('<h1>Hello Word router</h1>')
})

router.get('/:name', function(req,res) {
  res.send('<hi>Hello ' + req.params.name + '</hi>')
})

router.post('/', function(req,res) {
  var name = req.body.name;
  res.json({message: 'Hello ' + name })
})
var port = process.env.PORT || 8080
app.use('/home', router)
app.listen(port);
console.log('Magic happens on port ' + port)