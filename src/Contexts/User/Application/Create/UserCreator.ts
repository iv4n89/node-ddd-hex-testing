import { User } from "@contexts/User/Domain/User";
import { UserRepository } from "@contexts/User/Domain/UserRepository";

export class UserCreator {
    constructor(private repository: UserRepository) {}

    async run(params: {id: string, name: string, email: string, password: string}): Promise<void> {
        const user = User.fromPrimitives(params);
        this.repository.save(user);
    }
}
