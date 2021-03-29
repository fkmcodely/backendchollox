let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const basicProduct = new Schema({
    id: { type: String },
    title: { type: String},
    description: { type: String},
    price: { typePrice: String }
});

module.exports = mongoose.model('BasicProduct',basicProduct);
