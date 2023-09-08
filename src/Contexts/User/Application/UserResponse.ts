import { User } from "../Domain/User";

interface UserResponse {
    id: string;
    name: string;
    email: string;
    password: string;
}

export class UsersResponse {
    public readonly users: Array<UserResponse>;

    constructor(users: Array<User>) {
        this.users = users.map(user => user.toPrimitives());
    }
}
