const HabitModel = require("./../database/models/habit_model");

async function index(req, res) {
    //shows a list of all the resources
    const habits = await HabitModel.find();
    res.render("habit/index", {habits});
}

function create(req, res) {
    // create a resource

}

function createForm(req, res) {
    //shows the form to create the resource
    res.render("habit/new");
}

function show(req, res) {
    //shows a resource

}

function destroy(req, res) {
    //deletes a resource

}

function update(req, res) {
    // updates a resource

}

function updateForm(req, res) {
    //shows the form to edit the resource

}