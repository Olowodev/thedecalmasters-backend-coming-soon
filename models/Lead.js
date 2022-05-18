const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema(
    {
        email:{type: String, required: true, index: true, unique: true},
    },
    { timestamps: true}
);

module.exports = mongoose.model('Lead', LeadSchema)