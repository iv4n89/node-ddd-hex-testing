import { Nullable } from "../../../Shared/Domain/Nullable";
import { TypeOrmRepository } from "../../../Shared/Infrastructure/persistence/typeorm/TypeOrmRepository";
import { User } from "../../Domain/User";
import { UserId } from "../../Domain/UserId";
import { UserRepository } from "../../Domain/UserRepository";
import { EntitySchema } from "typeorm";
import { UserEntity } from "./typeorm/UserEntity.entity";

export class TypeOrmUserRepository extends TypeOrmRepository<User> implements UserRepository {
    protected entitySchema(): EntitySchema<User> {
        return UserEntity;
    }
    public save(user: User): Promise<void> {
        return this.persist(user);
    }
    public async findAll(): Promise<User[]> {
        const repository = await this.repository();
        return await repository.find();
    }
    public async findOne(userId: UserId): Promise<Nullable<User>> {
        const repository = await this.repository();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user = await repository.findOne({ where: { id: userId.value } });
        return user;
    }
    public async delete(userId: UserId): Promise<void> {
        const repository = await this.repository();
        await repository.delete({ id: userId.value });
    }

}
