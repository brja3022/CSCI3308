var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var pgp = require('pg-promise')();

const dbConfig = {
    host: 'localhost',
    port: 5432,
    database: '',
    user: 'postgres',
    password: 'pwd'
};

var db = pgp(dbConfig);

//app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    var query = 'select * from keyword;';
    db.any(query)
        .then(function (rows){
            res.render('index', {
                my_title: "Index",

            })
        })
    });


//app.get('/')

app.listen(3004);
console.log('3004 is the magic port');