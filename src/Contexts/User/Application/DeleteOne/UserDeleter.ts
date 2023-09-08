import { UserId } from "@contexts/User/Domain/UserId";
import { UserRepository } from "@contexts/User/Domain/UserRepository";

export class UserDeleter {
    constructor(private userRepository: UserRepository) {}

    async run(userId: string) {
        await this.userRepository.delete(new UserId(userId));
    }
}
