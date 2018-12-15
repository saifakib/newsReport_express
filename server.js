const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');


//Handlebars Middleware Engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Static
app.use(express.static(path.join(__dirname, 'public')));

//PORT
const port = process.env.PORT || 8000;

app.use((req,res)=>{
    res.send('hello');
});

//port connect
app.listen(port, ()=>{
    console.log(`Server running on this ${port}`);
});