import { AggregateRoot } from "../../Shared/Domain/AggregateRoot";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";
import { UserPassword } from "./UserPassword";

export class User extends AggregateRoot {
    readonly id: UserId;
    readonly name: UserName;
    readonly email: UserEmail;
    readonly password: UserPassword;

    constructor(id: UserId, name: UserName, email: UserEmail, password: UserPassword) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static create(id: UserId, name: UserName, email: UserEmail, password: UserPassword): User {
        const user = new User(id, name, email, password);

        return user;
    }

    static fromPrimitives(plainData: { id: string; name: string; email: string; password: string }): User {
        return new User(
            new UserId(plainData.id),
            new UserName(plainData.name),
            new UserEmail(plainData.email),
            new UserPassword(plainData.password),
        );
    }

    public toPrimitives() {
        return {
            id: this.id.value,
            name: this.name.value,
            email: this.email.value,
            password: this.password.value,
        };
    }
}
