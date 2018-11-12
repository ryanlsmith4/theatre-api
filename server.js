// server.js - Theater Reservation API

var express = require('express');
var app = express();

// Paste this at the top of `server.js`
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
let db;

// Use connect method to connect to the server.
// Paste this inside `app.listen` callback!
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db(dbName);
});


var theater = {
    "_id" : 1
  , "name" : "The Royal"
  , "seats" : [ [ 2, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]
  , "seatsAvailable" : 80
}

// Example stub:
app.get('/theater/name-of-route', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
});

// Stub for seats seatsAvailable
app.get('/theater/movie', function(req, res) {
    // res.send(theater.name)
    // res.send(theater.seatsAvailable)
    res.json(theater.seats[0][3])
    res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
})

//stub for deleting Reservation
app.delete('/theater/movie/seatsAvailable/seat', function(req, res) {
    res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
})

//stub for updating seats in JSON object
app.put('/theater/movie', function(req, res) {
    res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
})

app.get('/', function(req, res) {



})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
