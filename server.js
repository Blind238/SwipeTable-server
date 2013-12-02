var express = require('express'),
    app = express(),
    getRouter = require('./controllers/getRouter');

app.use(express.compress());

app.use(express.static(__dirname + '/public', { maxAge: 0}));

app.get('/api', getRouter.getAll);

app.listen(process.env.PORT || 8080);

//TODO: Handle filtering
//