import { UserDeleteController } from "@apps/backend/controllers/users/UserDeleteController";
import { UserGetController } from "@apps/backend/controllers/users/UserGetController";
import { UserPutController } from "@apps/backend/controllers/users/UserPutController";
import { Router } from "express";
import { body } from 'express-validator';
import { validateReqSchema } from "..";

const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('email').exists().isString().isEmail(),
    body('password').exists().isString().isStrongPassword({ minLength: 7, minLowercase: 1, minNumbers: 1, minSymbols: 1, minUppercase: 1 })
];

export const register = (router: Router) => {
    const userPutController = new UserPutController();
    const userGetController = new UserGetController();
    const userDeleteController = new UserDeleteController();
    router.put('/users/:id', reqSchema, validateReqSchema, userPutController.run);
    router.get('/users/:id?', userGetController.run);
    router.delete('/users/:id', userDeleteController.run);
}
