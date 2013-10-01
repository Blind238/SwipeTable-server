var express = require('express'),
    app = express(),
    data = require('./routes/data');

app.use(express.static(__dirname + '/public'));

app.get('/api', data.getAll);

app.listen(process.env.PORT || 8080);

//TODO: Handle filtering
//