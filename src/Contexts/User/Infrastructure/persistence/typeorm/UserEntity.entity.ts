import { ValueObjectTransformer } from "../../../../Shared/Infrastructure/persistence/typeorm/ValueObjectTransformer";
import { User } from "../../../Domain/User";
import { UserEmail } from "../../../Domain/UserEmail";
import { UserId } from "../../../Domain/UserId";
import { UserName } from "../../../Domain/UserName";
import { UserPassword } from "../../../Domain/UserPassword";
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
