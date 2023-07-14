const { userSignUpController, loginController } = require("./user.controller");

const router = require("express").Router();


router.post("/create-user", userSignUpController);
router.post("/login-user", loginController);

module.exports = router;
