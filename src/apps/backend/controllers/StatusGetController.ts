import { Request, Response } from "express";
import httpStatus from 'http-status';
import { Controller } from "./Controller";

export class StatusGetController implements Controller {

    async run(req: Request, res: Response): Promise<void> {
        res.status(httpStatus.OK).send({ message: 'Ok' });
    }

}
