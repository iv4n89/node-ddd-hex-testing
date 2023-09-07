import { User } from "../../Domain/User";
import { UserRepository } from "../../Domain/UserRepository";

export class UserCreator {
    constructor(private repository: UserRepository) {}

    async run(params: {id: string, name: string, email: string, password: string}): Promise<void> {
        const user = User.fromPrimitives(params);
        this.repository.save(user);
    }
}
