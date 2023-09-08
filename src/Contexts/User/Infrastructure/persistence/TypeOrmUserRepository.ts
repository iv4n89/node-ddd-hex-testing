import { Nullable } from "@contexts/Shared/Domain/Nullable";
import { TypeOrmRepository } from "@contexts/Shared/Infrastructure/persistence/typeorm/TypeOrmRepository";
import { User } from "@contexts/User/Domain/User";
import { UserId } from "@contexts/User/Domain/UserId";
import { SearchCriteria, UserRepository } from "@contexts/User/Domain/UserRepository";
import { EntitySchema, Like } from "typeorm";
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
        const user = await repository.findOneBy({ id: userId as any });
        return user;
    }
    public async search(criteria: SearchCriteria): Promise<Nullable<User[]>> {
        const repository = await this.repository();
        const users = await repository.find({ where: { 
            ...(criteria.id && { id: criteria.id }),
            ...(criteria.name && { name: Like(criteria.name.searchMode()) }),
            ...(criteria.email && { email: criteria.email }) 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any });
        return users
    }
    public async delete(userId: UserId): Promise<void> {
        const repository = await this.repository();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await repository.delete({ id: userId as any });
    }

}
