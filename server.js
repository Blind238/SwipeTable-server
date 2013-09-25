var express = require('express'),
    app = express(),
    data = require('./routes/dummyData');

app.get('/api', data.getAll);

app.get('/api/:id',data.getById);

app.listen(process.env.PORT || 2223);

//TODO: Handle sorting
//  Sort by value 1
//  Sort by value 2
//  Sort by value X
//TODO: Handle filtering
//