import { MongoClientFactory } from "../../../Shared/Infrastructure/persistence/mongo/MongoClientFactory";
import { UserCreator } from "../../Application/Create/UserCreator";
import { UserRepository } from "../../Domain/UserRepository";
// import { InMemoryRepository } from "../persistence/InMemoryRepository";
import { MongoUserRepository } from "../persistence/MongoUserRepository";

const userRepository: UserRepository = new MongoUserRepository(MongoClientFactory.createClient('users', { url: 'mongodb://localhost:27017/hex' }));
export const userCreator: UserCreator = new UserCreator(userRepository);
