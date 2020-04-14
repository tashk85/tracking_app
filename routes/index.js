const express = require("express");
const router = express.Router();
const PageController = require("./../controllers/page_controller");
const AuthenticationController = require("./../controllers/authentication_controller");
const { celebrate, Joi } = require("celebrate");
const { authRedirect, authorise } = require("./../middleware/authorisation_middleware");
const passport = require("passport");
const habitRoutes = require("./habit_routes");

router.get("/", PageController.index);

router.get("/logout", AuthenticationController.logout);

router.get("/register", authRedirect, AuthenticationController.registerNew);

router.post("/register", celebrate({
    body: {
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}), AuthenticationController.registerCreate);

router.get("/login", authRedirect, AuthenticationController.loginNew);

router.post("/login", celebrate({
        body: {
            email: Joi.string().required(),
            password: Joi.string().required()
        }
    }), passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/login"
}));

router.get("/dashboard", authorise, PageController.dashboard);

// router.use("/habits", habitRoutes);

module.exports = router;