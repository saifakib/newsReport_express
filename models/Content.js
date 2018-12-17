const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required: true,
        data : Buffer
    },
    description : {
        type : String,
        required : true
    }
});

const Content = mongoose.model('Content', ContentSchema);
module.exports = Content;