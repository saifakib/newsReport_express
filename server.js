const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

//mongodb connect
mongoose.connect('mongodb://localhost/blog_content');

//Check connection with mongodb
const db = mongoose.connection;
db.on('error', (err) =>{
    console.log(err);
});
db.once('open', ()=>{
    console.log('Database connection stablished');
});

// Body Parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


//Handlebars Middleware Engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Static
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));

app.get('/', (req, res) =>{
    res.render('home', {
        title : 'WellCome'
    })
});
app.get('/about', (req, res) =>{
    res.render('about')
});


//PORT
const port = process.env.PORT || 7000;

//port connect
app.listen(port, ()=>{
    console.log(`Server running on this ${port}`);
});