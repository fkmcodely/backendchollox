let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String },
    name: { type: String },
    email : { type: String },
    password: { type: String}
});

module.exports = mongoose.model('User',userSchema);