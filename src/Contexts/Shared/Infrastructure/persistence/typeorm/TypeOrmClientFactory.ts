import { DataSource } from "typeorm";
import { TypeOrmConfig } from "./TypeOrmConfig";
import { datasources } from "./TypeOrmDatasources";

export class TypeOrmClientFactory {
    static async createClient(contextName: string, config: TypeOrmConfig): Promise<DataSource> {
        if (Object.keys(datasources).includes(contextName)) {
            return datasources[contextName];
        }
            const dataSource = new DataSource({
                name: contextName,
                type: 'postgres',
                host: config.host,
                port: config.port,
                username: config.username,
                password: config.password,
                database: config.database,
                entities: [__dirname + '/../../../../../Contexts/**/**/*.entity{.js,.ts}'],
                synchronize: true,
            });

            datasources[contextName] = dataSource;
            return dataSource;        
    }
}
