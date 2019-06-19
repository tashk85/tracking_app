const passport = require("passport");
const LocalStrategy = require("passport-local");
const UserModel = require("./../database/models/user_model");

passport.serializeUser((user, done) => {
    done(null, user._id); //save user id into the session
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await UserModel.findById(id);
        return done(null, user);
    } catch (error) {
        return done(error);
    }
});

passport.use(new LocalStrategy({ 
        usernameField: "email" 
    }, async (email, password, done) => {
        try { 
            // try to find the user
            const user = await UserModel.findOne({ email });

            // verify password
            if (user && user.verifyPasswordSync(password)) {
                //error is null because there wasn't an error, who just got verified
                return done(null, user);
            }

            // if false, then false means no one got verified
            return done(null, false);
            //if can't find the user, it will catch the error
        } catch(error) {
            done(error);
        }
    }
));

module.exports = passport;