import { userFinder, userFinderById } from "@contexts/User/Infrastructure/dependencies/dependencies";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";

type UserGetRequest = {
    id?: string;
}

export class UserGetController implements Controller {
    async run(req: Request<UserGetRequest, Record<string, never>, Record<string, never>, Record<string, never>>, res: Response): Promise<void> {
        try {
            if (req.params.id) {
                const user = await userFinderById.run(req.params.id);
                res.status(httpStatus.OK).send(user);
                return;
            }
            const users = await userFinder.run();
            res.status(httpStatus.OK).send(users);
            return;
        } catch (err) {
            if (err instanceof Error) {
                console.error(err);
                res.status(httpStatus.NOT_FOUND).send({ err: err.message });
            }
        }
    }
}
