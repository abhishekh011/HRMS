import express from "express";
import { signIn, signUp } from "../controllers/user.controller.js";
import { body } from "express-validator";
import { resetPassword, sendOtp } from "../controllers/email.controller.js";


const router = express.Router();

router.post("/signUp",
body("name","Username is required").notEmpty(),
body("password","Password is required").notEmpty(),
body("password","Password must have at least 6 letter").isLength({min: 6}),
body("email","Invalid email").isEmail(),
body("email","Email id is required").notEmpty(),signUp);

router.post("/SignIn",
    body("email","Invalid Email").isEmail(),
    body('password',"password Is Required").notEmpty(),
    body('password',"Password must have at least 6 letter").isLength({min: 6}),signIn);

router.post('/sendOtp',sendOtp);
router.post('/resetPassword',resetPassword);

export default router;