
const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
       extname: 'hbs',
   
    partialsDir: __dirname + '/views/partials/'
    }));


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('catalogoTemplate', {layout : 'catalogoLayout'});
    });


app.listen(port, () => console.log(`App listening to port ${port}`));
