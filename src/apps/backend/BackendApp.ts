import { Server } from "./server";

export class BackendApp {
    server?: Server;

    async start() {
        const port = process.env.PORT || '5001';
        this.server = new Server(port);

        await this.server.listen();
    }

    get httpServer() {
        return this.server?.getHttpServer();
    }

    async stop() {
        return this.server?.stop();
    }
}
