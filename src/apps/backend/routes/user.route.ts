import { Router } from "express";
import { UserPutController } from "../controllers/UserPutController";

export const register = (router: Router) => {
    const userPutController = new UserPutController();
    router.put('/users/:id', userPutController.run);
}
