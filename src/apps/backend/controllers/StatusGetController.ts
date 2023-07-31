import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { Controller } from "./Controller";
import httpStatus from 'http-status';

export class StatusGetController implements Controller {

    async run(req: Request, res: Response): Promise<void> {
        res.status(httpStatus.OK).send({ message: 'Ok' });
    }

}
