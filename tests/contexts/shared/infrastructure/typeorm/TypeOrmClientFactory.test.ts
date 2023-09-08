import { TypeOrmClientFactory } from "@contexts/Shared/Infrastructure/persistence/typeorm/TypeOrmClientFactory"
import { DataSource } from "typeorm";

describe('TypeOrmClientFactory', () => {
    const factory = TypeOrmClientFactory;
    let client: DataSource;

    beforeEach(async () => {
        client = await factory.createClient('typeormtest', { host: 'localhost', port: 5432, username: 'root', password: 'secr3t!', database: 'hex' });
        client = await client.initialize();
    });

    afterEach(async () => {
        await client.destroy();
    });

    it('creates a new client with the connection already stablished', () => {
        expect(client).toBeInstanceOf(DataSource);
        expect(client.isInitialized).toBe(true);
    });

    it('creates a new client if it does not exist a client with the given name', async () => {
        let newClient = await factory.createClient('typeormtest2', { host: 'localhost', port: 5432, username: 'root', password: 'secr3t!', database: 'hex' });
        newClient = await newClient.initialize();
        expect(newClient).not.toBe(client);
        expect(newClient.isInitialized).toBe(true);

        await newClient.destroy();
    });

    it('returns a client if it already exists', async () => {
        const newClient = await factory.createClient('typeormtest', { host: 'localhost', port: 5432, username: 'root', password: 'secr3t!', database: 'hex' });
        expect(newClient).toBe(client);
        expect(newClient.isInitialized).toBe(true);
    });
})
