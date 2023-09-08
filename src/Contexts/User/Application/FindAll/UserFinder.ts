import { UserRepository } from "@contexts/User/Domain/UserRepository";

export class UserFinder {
    constructor(private userRepository: UserRepository) {}

    async run() {
        const users = await this.userRepository.findAll();

        return users.map(u => u.toPrimitives());
    }
}
