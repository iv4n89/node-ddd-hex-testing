import { UserCreator } from "../../Application/Create/UserCreator";
import { UserRepository } from "../../Domain/UserRepository";
import { InMemoryRepository } from "../persistence/InMemoryRepository";

const userRepository: UserRepository = new InMemoryRepository();
export const userCreator: UserCreator = new UserCreator(userRepository);
