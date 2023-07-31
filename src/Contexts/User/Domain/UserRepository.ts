import { Nullable } from "../../Shared/Infrastructure/Nullable";
import { User } from "./User";
import { UserId } from "./UserId";

export interface UserRepository {
    save(user: User): Promise<void>;
    findAll(): Promise<Array<User>>;
    findOne(userId: UserId): Promise<Nullable<User>>;
    delete(userId: UserId): Promise<void>;
}
