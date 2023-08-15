import { User } from "@contexts/User/Domain/User";
import { UserEmail } from "@contexts/User/Domain/UserEmail";
import { UserId } from "@contexts/User/Domain/UserId";
import { UserName } from "@contexts/User/Domain/UserName";
import { UserPassword } from "@contexts/User/Domain/UserPassword";
import { FakeUserId } from "../../Shared/domain/Users/FakeUserId";
import { CreateUserRequest } from "../application/CreateUserRequest";
import { FakeUserEmail } from "./FakeUserEmail";
import { FakeUserName } from "./FakeUserName";
import { FakeUserPassword } from "./FakeUserPassword";

export class FakeUser {
    static create(id: UserId, name: UserName, email: UserEmail, password: UserPassword): User {
        return new User(id, name, email, password);
    }

    static random(): User {
        return this.create(
            FakeUserId.random(),
            FakeUserName.random(),
            FakeUserEmail.random(),
            FakeUserPassword.random()
        )
    }

    static fromRequest(request: CreateUserRequest): User {
        return this.create(
            FakeUserId.create(request.id),
            FakeUserName.create(request.name),
            FakeUserEmail.create(request.email),
            FakeUserPassword.create(request.password)
        );
    }
}
