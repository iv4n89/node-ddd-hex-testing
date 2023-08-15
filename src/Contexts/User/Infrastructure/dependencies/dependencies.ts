import { UserCreator } from "@contexts/User/Application/Create/UserCreator";
import { UserRepository } from "@contexts/User/Domain/UserRepository";
import { InMemoryRepository } from "../persistence/InMemoryRepository";

const userRepository: UserRepository = new InMemoryRepository();
export const userCreator: UserCreator = new UserCreator(userRepository);
