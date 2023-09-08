import { userDeleter } from "@contexts/User/Infrastructure/dependencies/dependencies";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "../Controller";

type UserDeleteRequest = {
    id: string;
}

export class UserDeleteController implements Controller {
    async run(req: Request<UserDeleteRequest, Record<string, never>, Record<string, never>, Record<string, never>>, res: Response): Promise<void> {
        try {
            await userDeleter.run(req.params.id);
            res.status(httpStatus.NO_CONTENT).send();
        } catch (err) {
            if (err instanceof Error) {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ err: err.message });
            }
        }
    }
}
