import { NextFunction, Request, Response, Router } from "express";
import { register as statusRoute } from './status.route';
import { register as userRoute } from './users/user.route';
import { ValidationError, validationResult } from 'express-validator';
import httpStatus from "http-status";

export function registerRoutes(router: Router) {
    // const routes = glob.sync(__dirname + './**/*.route.*', { posix: true, dotRelative: true });
    // const transformedRoutes = routes.map(r => r.replace(/\\/g, '/'));
    // console.log(transformedRoutes);
    // transformedRoutes.map(route => register(route, router));
    statusRoute(router);
    userRoute(router);
}

// function register(routePath: string, router: Router) {
//     const route = require(routePath);
//     route.register(router);
// }

export function validateReqSchema(req: Request, res: Response, next: NextFunction) {
    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
        return next();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errors = validationErrors.array().map((err: ValidationError) => ({ [(<any>err).path]: err.msg }));

    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
        errors
    });
}
