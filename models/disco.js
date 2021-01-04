const{Schema} = require('mongoose');

const {Schema, model} = require('mongoose');

const discoSchema = new Schema ({
    titulo: String,
    artist: String,
    year: {
        type: Number,
        default: 0,
    },
    genre: String,
    urlImagen: String


});

module.exports = mongoose.model('disco', discoSchema);
