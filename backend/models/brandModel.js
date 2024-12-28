const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: { type: String, required: true },
    logoUrl: { type: String, default: '' },
    isBoycotted: { type: Boolean, default: false },
    reason: { type: String, default: '' },
    visibility: { type: Boolean, default: true }
    // ...other fields as needed
}, {
    timestamps: true
});

module.exports = mongoose.model('Brand', brandSchema);
