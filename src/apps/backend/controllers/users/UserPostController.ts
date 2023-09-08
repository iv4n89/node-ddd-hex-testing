import { userSearcher } from "@contexts/User/Infrastructure/dependencies/dependencies";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";

type UserPostRequest = {
    id?: string;
    name?: string;
    email?: string;
}

export class UserPostController implements Controller {
    public async run(req: Request<Record<string, never>, Record<string, never>, UserPostRequest, Record<string, never>>, res: Response): Promise<void> {
        try {

            if (req.body) {
                const users = await userSearcher.run(req.body);
                res.status(httpStatus.OK).send(users);
                return;
            } 
        } catch (err) {
            if (err instanceof Error) {
                res.status(httpStatus.NOT_FOUND).send({ err: err.message });
            }
        }
    }
}
