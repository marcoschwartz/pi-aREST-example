// Include modules
var express = require('express');
var app = express();
var piREST = require('pi-arest')(app);

// ID & name
piREST.set_id('34f5eQ');
piREST.set_name('my_new_Pi');

// Example variables
temperature = 24;
humidity = 40;
piREST.variable('temperature',temperature);
piREST.variable('humidity',humidity);

// Start server
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});