const HabitModel = require("./../database/models/habit_model");

function index(req, res) {
    req.session.views = req.session.views ? req.session.views + 1 : 1; 
    res.json(req.session);
}