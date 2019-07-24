/*import express, { static } from 'express';
var app = express();
import { json, urlencoded } from 'body-parser';
app.use(json());
app.use(urlencoded({extended: true}));

var pgp = require('pg-promise')();

const dbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'cKeywords',
    user: 'postgres',
    password: 'pwd'
};

var db = pgp(dbConfig);

//app.set('view engine', 'ejs');
app.use(static(__dirname + '/'));

app.get('/', function(req, res){
    var query = 'select * from keyword;';
    db.any(query)
        .then(function (rows){
            res.render('index', {
                my_title: "Index",

            })
        })
}); 

app.get('/', function(req, res){
    var keyName = 'select * from name;';
    db.task('get-everything', task => {
        return task.batch([
            task.any(keyName)
        ]);
    })
    .then(info => {
        document.getElementById("cCode").innerHTML = '<p> ' + info[0] + '</p>';
    })
});

//app.get('/')

app.listen(3001);
console.log('3001 is the magic port');
*/


var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.  We'll be using localhost and run our database on our local machine (i.e. can't be access via the Internet)
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab, we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database.  You'll need to set a password USING THE PSQL TERMINAL THIS IS NOT A PASSWORD FOR POSTGRES USER ACCOUNT IN LINUX!
**********************/
const dbConfig = {
	host: 'localhost',
	port: 5432,
	database: 'cKeywords',
	user: 'postgres',
	password: 'pwd'
};

var db = pgp(dbConfig);

// set the view engine to ejs
//app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory



/*********************************
 Below we'll add the get & post requests which will handle:
   - Database access
   - Parse parameters from get (URL) and post (data package)
   - Render Views - This will decide where the user will go after the get/post request has been processed

 Web Page Requests:
*/

app.get('/', function(req, res){
    var query = 'select * from keyword;';
    db.any(query)
        .then(function (rows){
            res.render('index', {
                my_title: "Index",

            })
        })
});

app.get('/', function(req, res){
    var keyName = 'select * from name;';
    db.task('get-everything', task => {
        return task.batch([
            task.any(keyName)
        ]);
    })
    .then(info => {
        document.getElementById("cCode").innerHTML = '<p> ' + info[0] + '</p>';
    })
});