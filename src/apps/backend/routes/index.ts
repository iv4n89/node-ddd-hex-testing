import { Router } from "express";
import { register as statusRoute } from './status.route';
import { register as userRoute } from './user.route';

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
