import { ValueObjectTransformer } from "@contexts/Shared/Infrastructure/persistence/typeorm/ValueObjectTransformer";
import { User } from "@contexts/User/Domain/User";
import { UserEmail } from "@contexts/User/Domain/UserEmail";
import { UserId } from "@contexts/User/Domain/UserId";
import { UserName } from "@contexts/User/Domain/UserName";
import { UserPassword } from "@contexts/User/Domain/UserPassword";
import { EntitySchema } from "typeorm";

export const UserEntity = new EntitySchema<User>({
    name: 'User',
    tableName: 'users',
    target: User,
    columns: {
        id: {
            type: String,
            primary: true,
            transformer: ValueObjectTransformer(UserId)
        },
        name: {
            type: String,
            transformer: ValueObjectTransformer(UserName)
        },
        email: {
            type: String,
            transformer: ValueObjectTransformer(UserEmail)
        },
        password: {
            type: String,
            transformer: ValueObjectTransformer(UserPassword)
        }
    }
})
