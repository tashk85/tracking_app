const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        enum: ['daily', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        default: 'daily'
    },
    time: {
        type: String,
        enum: ['morning', 'afternoon', 'evening', 'once at any time'],
        default: 'once at any time'
    }
});

module.exports = HabitSchema;