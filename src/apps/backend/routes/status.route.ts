import { Router } from "express";
import { StatusGetController } from "@apps/backend/controllers/StatusGetController";

export const register = (router: Router) => {
    const statusGetController = new StatusGetController();
    router.get('/status', statusGetController.run);
}
