const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        enum: ['daily', '2 times a week', '3 times a week', '4 times a week', '5 times a week'],
        default: 'daily'
    }
});

module.exports = HabitSchema;