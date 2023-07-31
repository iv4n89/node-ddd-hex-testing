import { BackendApp } from "./BackendApp";

try {
    new BackendApp().start();
} catch (err) {
    console.log(err);
    process.exit(1);
}

process.on('uncaughtException', err => {
    console.log('uncaught exception: ', err);
    process.exit(1);
});

process.on('unhandledRejection', rej => {
    console.log('unhandled rejection, ', rej);
});
