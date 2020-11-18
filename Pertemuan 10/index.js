const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const layouts = require('express-ejs-layouts');
const todo = require('./routes/todo');



//use layouts
app.use(layouts);
app.set('layout', 'layouts/main.ejs');

//place all styles block in the layout at the head
app.set("layout extractStyles", true)
//place all scripts block in the layout at the end
app.set("layout extractScripts", true)

//set the view engine to ejs
app.set('view engine', 'ejs');

//body-parser to parse request body
app.use(bodyParser.urlencoded());

//static files
app.use(express.static('public'));

//enabling session
app.use(session({
    secret: 'some_secret_key',
    cookie: {}
}));

//routes
const index = require('./routes/index');
const auth = require('./routes/auth');

app.use('/', index);
app.use('/auth', auth);

//Use TODO
app.use('/todo', todo);

//start server on port 3000
const port = 3000;
app.listen(port);
console.log(`Server runs at port ${port}..`);