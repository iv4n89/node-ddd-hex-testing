import { TypeOrmConfigFactory } from "../../../Shared/Infrastructure/persistence/postgres/TypeOrmConfigFactory";
import { TypeOrmClientFactory } from "../../../Shared/Infrastructure/persistence/typeorm/TypeOrmClientFactory";
import { UserCreator } from "../../Application/Create/UserCreator";
import { UserRepository } from "../../Domain/UserRepository";
// import { InMemoryRepository } from "../persistence/InMemoryRepository";
import { TypeOrmUserRepository } from "../persistence/TypeOrmUserRepository";

// export const mongoClient = MongoClientFactory.createClient('users', { url: 'mongodb://localhost:27017/hex' });
// const userRepository: UserRepository = new MongoUserRepository(mongoClient);

export const dataSource = TypeOrmClientFactory.createClient('users', TypeOrmConfigFactory.createConfig()).then(d => d.initialize());
const userRepository: UserRepository = new TypeOrmUserRepository(dataSource);

export const userCreator: UserCreator = new UserCreator(userRepository);
