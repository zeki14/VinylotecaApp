var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Vinyloteca', { useNewUrlParser: true , useUnifiedTopology: true});
mongoose.connection.on('open', _ => {
    console.log('conected');
});