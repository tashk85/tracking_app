function index(req, res) {
    req.session.views = req.session.views ? req.session.views + 1 : 1; 
    // res.json(req.session);
    res.send("Hello");
}

function dashboard(req, res) {
    const name = req.user.name;
    console.log("yes");
    res.render("pages/dashboard", { name });
}

module.exports = {
    index,
    dashboard
}