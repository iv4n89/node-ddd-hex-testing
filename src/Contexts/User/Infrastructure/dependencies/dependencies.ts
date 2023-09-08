import { TypeOrmConfigFactory } from "@contexts/Shared/Infrastructure/persistence/postgres/TypeOrmConfigFactory";
import { TypeOrmClientFactory } from "@contexts/Shared/Infrastructure/persistence/typeorm/TypeOrmClientFactory";
import { UserCreator } from "@contexts/User/Application/Create/UserCreator";
import { UserDeleter } from "@contexts/User/Application/DeleteOne/UserDeleter";
import { UserFinder } from "@contexts/User/Application/FindAll/UserFinder";
import { UserFinderById } from "@contexts/User/Application/FindOne/UserFinderById";
import { UserRepository } from "@contexts/User/Domain/UserRepository";
import { TypeOrmUserRepository } from "../persistence/TypeOrmUserRepository";
// import { InMemoryRepository } from "../persistence/InMemoryRepository";

// export const mongoClient = MongoClientFactory.createClient('users', { url: 'mongodb://localhost:27017/hex' });
// const userRepository: UserRepository = new MongoUserRepository(mongoClient);

export const dataSource = TypeOrmClientFactory.createClient('users', TypeOrmConfigFactory.createConfig()).then(d => d.initialize());
export const userRepository: UserRepository = new TypeOrmUserRepository(dataSource);

export const userCreator: UserCreator = new UserCreator(userRepository);
export const userFinder: UserFinder = new UserFinder(userRepository);
export const userFinderById: UserFinderById = new UserFinderById(userRepository);
export const userDeleter: UserDeleter = new UserDeleter(userRepository);
