import { UserId } from "@contexts/User/Domain/UserId";
import { UserRepository } from "@contexts/User/Domain/UserRepository";

export class UserFinderById {
    constructor(private userRepository: UserRepository) {}

    async run(userId: string) {
    const user = await this.userRepository.findOne(new UserId(userId));

        if (!user) {
            throw new Error(`User with id ${userId} not found`);
        }

        return user.toPrimitives();
    }
}
