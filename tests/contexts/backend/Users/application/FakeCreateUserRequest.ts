import { UserEmail } from "@contexts/User/Domain/UserEmail";
import { UserId } from "@contexts/User/Domain/UserId";
import { UserName } from "@contexts/User/Domain/UserName";
import { UserPassword } from "@contexts/User/Domain/UserPassword";
import { FakeUserId } from "../../Shared/domain/Users/FakeUserId";
import { FakeUserEmail } from "../domain/FakeUserEmail";
import { FakeUserName } from "../domain/FakeUserName";
import { FakeUserPassword } from "../domain/FakeUserPassword";
import { CreateUserRequest } from "./CreateUserRequest";

export class FakeCreateUserRequest {
    static create(id: UserId, name: UserName, email: UserEmail, password: UserPassword): CreateUserRequest {
        return {
            id: id.value,
            name: name.value,
            email: email.value,
            password: password.value
        };
    }

    static random(): CreateUserRequest {
        return this.create(
            FakeUserId.random(),
            FakeUserName.random(),
            FakeUserEmail.random(),
            FakeUserPassword.random()
        );
    }

    static invalidRequest(): CreateUserRequest {
        return {
            id: FakeUserId.random().value,
            name: FakeUserName.invalidName('type') as string,
            email: FakeUserEmail.invalid('format') as string,
            password: FakeUserPassword.invalid('format') as string
        };
    }
}
