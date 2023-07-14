const { userSignUpController, loginController, getUserController } = require("./user.controller");

const router = require("express").Router();


router.post("/create-user", userSignUpController);
router.post("/login-user", loginController);
router.get("/getUser", getUserController);


module.exports = router;
