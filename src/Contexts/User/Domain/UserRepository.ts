import { Nullable } from "@contexts/Shared/Domain/Nullable";
import { User } from "./User";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";

export interface SearchCriteria {
    id?: UserId;
    name?: UserName;
    email?: UserEmail;
}

export interface UserRepository {
    save(user: User): Promise<void>;
    findAll(): Promise<Array<User>>;
    findOne(userId: UserId): Promise<Nullable<User>>;
    search(criteria: SearchCriteria): Promise<Nullable<Array<User>>>;
    delete(userId: UserId): Promise<void>;
}
