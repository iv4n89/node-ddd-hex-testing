import { Nullable } from "@contexts/Shared/Domain/Nullable";
import { MongoRepository } from "@contexts/Shared/Infrastructure/persistence/mongo/MongoRepository";
import { User } from "@contexts/User/Domain/User";
import { UserId } from "@contexts/User/Domain/UserId";
import { UserRepository } from "@contexts/User/Domain/UserRepository";

interface UserDocument extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
}

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {
    protected collectionName(): string {
        return 'users';
    }
    save(user: User): Promise<void> {
        return this.persist(user.id.value, user);
    }
    async findAll(): Promise<User[]> {
        const collection = await this.collection();
        const documents = await collection.find<UserDocument>({}, {}).toArray();
        return documents.map(document => 
            User.fromPrimitives({ id: document._id, name: document.name, email: document.email, password: document.password })
        );
    }
    async findOne(userId: UserId): Promise<Nullable<User>> {
        const collection = await this.collection();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const document = await collection.findOne<UserDocument>({ _id: userId.value as any });
        if (!document) {
            return null;
        }
        return User.fromPrimitives({ id: document._id, name: document.name, email: document.email, password: document.password });
    }
    async delete(userId: UserId): Promise<void> {
        const collection = await this.collection();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        collection.deleteOne({ _id: userId.value as any });
    }
    
}
