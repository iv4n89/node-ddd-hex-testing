import { Router } from "express";
import { UserPutController } from "../controllers/UserPutController";
import { body } from 'express-validator';
import { validateReqSchema } from ".";

const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('email').exists().isString().isEmail(),
    body('password').exists().isString().isStrongPassword({ minLength: 7, minLowercase: 1, minNumbers: 1, minSymbols: 1, minUppercase: 1 })
];

export const register = (router: Router) => {
    const userPutController = new UserPutController();
    router.put('/users/:id', reqSchema, validateReqSchema, userPutController.run);
}
