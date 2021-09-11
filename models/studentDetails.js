const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
    "name": String,
    "collegeName": String,
    "location": String
}, {
    collection: "studentDetailsCollevtion",
});

const studentDetailsModel = mongoose.model('studentDetails', studentDetailsSchema);
module.exports  = studentDetailsModel;