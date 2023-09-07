import { MongoClientFactory } from "@contexts/Shared/Infrastructure/persistence/mongo/MongoClientFactory"
import { MongoClient } from "mongodb";

const mongodburl = 'mongodb://localhost:27017';

describe('MongoClientFactory', () => {
    const factory = MongoClientFactory;
    let client: MongoClient;

    beforeEach(async () => {
        client = await factory.createClient('test', { url: mongodburl + '/test1' });
    });

    afterEach(async () => {
        await client.close();
    });

    it('creates a new client with the connection already established', () => {
        expect(client).toBeInstanceOf(MongoClient);
    });

    it('creates a new client if it does not exist a client with the given name', async () => {
        const newClient = await factory.createClient('test2', { url: mongodburl + '/test2' });

        expect(newClient).not.toBe(client);
        await newClient.close();
    });

    it('returns a client if it already exists', async () => {
        const newClient = await factory.createClient('test', { url: mongodburl + 'test3' });

        expect(newClient).toBe(client);

        await newClient.close();
    });
})
