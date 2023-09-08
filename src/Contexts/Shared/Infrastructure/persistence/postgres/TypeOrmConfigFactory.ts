import { TypeOrmConfig } from "../typeorm/TypeOrmConfig";

export class TypeOrmConfigFactory {
    static createConfig(): TypeOrmConfig {
        return {
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: 'secr3t!',
            database: 'hex'
        }
    }
}
