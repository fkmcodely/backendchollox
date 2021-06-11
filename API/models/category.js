let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const categorySchema = new Schema({
    id: { type: String },
    name: { type: String },
    description: { type: String },
    iconName: { type: String }
});

module.exports = mongoose.model('Category',categorySchema);