const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/users.js");

router.get("/", (req,res)=>{
    res.redirect("/listings");
});

// 1. SignUp Route 
router.route("/signup")
.get(userController.signUpForm)
.post(userController.signUp );

//2. Login Route
router.route("/login")
.get(userController.loginForm)
.post(saveRedirectUrl,passport.authenticate("local", {failureRedirect : "/login",failureFlash : true}), userController.login);

//3. Logout Route 
router.get("/logout",userController.logout);

module.exports = router;