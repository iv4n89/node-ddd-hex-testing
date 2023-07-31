import { User } from "../../Domain/User";
import { UserEmail } from "../../Domain/UserEmail";
import { UserId } from "../../Domain/UserId";
import { UserName } from "../../Domain/UserName";
import { UserPassword } from "../../Domain/UserPassword";
import { UserRepository } from "../../Domain/UserRepository";

export class UserCreator {
    constructor(private repository: UserRepository) {}

    async run(params: {id: string, name: string, email: string, password: string}): Promise<void> {
        const user = User.fromPrimitives(params);
        this.repository.save(user);
    }
}
