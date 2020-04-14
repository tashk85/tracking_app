const UserModel = require("./../database/models/user_model");

function registerNew(req, res) {
    res.render("authentication/register");
}

async function registerCreate(req, res, next) {
    const { name, email, password } = req.body;
    const user = await UserModel.create({ name, email, password });
    
    req.login(user, (error) => {
        if (error) {
            return next(error);
        }
        
        res.redirect("/dashboard");
    });
}

function logout(req, res) {
    req.logout();
    res.redirect("/");
}

function loginNew(req, res) {
    res.render("authentication/login");
}

module.exports = {
    registerNew,
    registerCreate,
    logout,
    loginNew
}