const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    id: { type: String, required: true },
    date: { type: Date, required: true },
    porteiros: [{ type: String }],
    recepcionistas: [{ type: String }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Schedule', scheduleSchema);