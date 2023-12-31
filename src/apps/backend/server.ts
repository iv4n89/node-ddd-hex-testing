import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import * as http from 'http';
import helmet from 'helmet';
import compress from 'compression';
import Router from 'express-promise-router';
import errorHandler from 'errorhandler';
import httpStatus from 'http-status';
import { registerRoutes } from './routes';

export class Server {
    private express: express.Express;
    private port: string;
    private httpServer?: http.Server;

    constructor(port: string) {
        this.port = port;
        this.express = express();
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(helmet.xssFilter());
        this.express.use(helmet.noSniff());
        this.express.use(helmet.hidePoweredBy());
        this.express.use(helmet.frameguard({ action: 'deny' }));
        this.express.use(compress());
        const router = Router();
        router.use(errorHandler());
        this.express.use(router);

        registerRoutes(router);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.log(err);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
        });
    }

    async listen(): Promise<void> {
        return new Promise(resolve => {
            this.httpServer = this.express.listen(this.port, () => {
                console.log(`Backend server is running at port ${this.port} in ${this.express.get('env')} mode`);
                console.log('   Press CTRL-C to stop\n');
                resolve();
            });
        });
    }

    getHttpServer(): http.Server | undefined {
        return this.httpServer;
    }

    async stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.httpServer) {
                this.httpServer.close(error => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve();
                });
            }
            return resolve();
        });
    }
}
