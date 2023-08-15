import { Nullable } from "@contexts/Shared/Infrastructure/Nullable";
import { User } from "@contexts/User/Domain/User";
import { UserId } from "@contexts/User/Domain/UserId";
import { UserRepository } from "@contexts/User/Domain/UserRepository";

let inMemoryUsers: Array<User> = [];

export class InMemoryRepository implements UserRepository {

    async save(user: User): Promise<void> {
        const existingUser = await this.findOne(user.id);

        if (existingUser) {
            Object.assign(existingUser, user);
            inMemoryUsers[inMemoryUsers.findIndex(user => user.id === existingUser.id)] = existingUser;
        } else {
            inMemoryUsers.push(user);
        }
    }
    findAll(): Promise<User[]> {
        return new Promise(resolve => {
            resolve(inMemoryUsers);
        });
    }
    async findOne(userId: UserId): Promise<Nullable<User>> {
        return new Promise((resolve, reject) => {
            if (!inMemoryUsers.some(user => user.id === userId)) {
                resolve(null);
            }

            const user = inMemoryUsers.find(user => user.id === userId);
            resolve(user);
        })
    }
    delete(userId: UserId): Promise<void> {
        return new Promise(resolve => {
            if (inMemoryUsers.some(user => user.id === userId)) {
                inMemoryUsers = [...inMemoryUsers.filter(user => user.id !== userId)];
            }

            resolve();
        })
    }

}
