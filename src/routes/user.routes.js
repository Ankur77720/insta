import { Router } from "express";
import * as userController from "../controllers/user.controller.js"
import { body } from "express-validator";
const router = Router();



router.post('/register',
    body('username')
        .isString()
        .withMessage('Username must be a string')
        .isLength({ min: 3, max: 15 })
        .withMessage('Username must be between 3 and 15 characters')
        .custom((value) => value === value.toLowerCase())
        .withMessage('Username must be lowercase'),
    body('email')
        .isEmail()
        .withMessage('Email must be a valid email'),
    body('password')
        .isString()
        .withMessage('Password must be a string')
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),


    userController.createUserController)



export default router;