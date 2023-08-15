import { Request, Response } from "express";
import { Controller } from "./Controller";
import { userCreator } from "@contexts/User/Infrastructure/dependencies/dependencies";
import httpStatus from 'http-status';

type UserPutRequest = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export class UserPutController implements Controller {
    async run(req: Request<{},{}, UserPutRequest, {}>, res: Response): Promise<void> {
        try {
            await userCreator.run(req.body);
            res.status(httpStatus.CREATED).send();
        } catch (err) {
            if (err instanceof Error) {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ err: err.message });
            }
        }
    }

}
