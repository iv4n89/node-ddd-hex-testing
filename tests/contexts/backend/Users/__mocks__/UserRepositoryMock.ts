import { Nullable } from "@contexts/Shared/Infrastructure/Nullable";
import { User } from "@contexts/User/Domain/User";
import { UserId } from "@contexts/User/Domain/UserId";
import { UserRepository } from "@contexts/User/Domain/UserRepository";

export class UserRepositoryMock implements UserRepository {
    private readonly mockSave;
    
    constructor() {
        this.mockSave = jest.fn();
    }
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async findOne(userId: UserId): Promise<Nullable<User>> {
        console.log(`${userId}`);
        throw Error('Not implemented');
    }
    async delete(userId: UserId): Promise<void> {
        console.log(`${userId}`);
    }

    async save(user: User): Promise<void> {
        await this.mockSave(user);
    }

    assertLastSavedUserIs(expected: User): void {
        const mock = this.mockSave.mock;
        const lastSavedUser = (mock.calls[mock.calls.length - 1] as User[])[0];
        expect(lastSavedUser).toBeInstanceOf(User);
        expect(lastSavedUser.id).toEqual(expected.id);
    }

    assertSaveHaveBeenCalled(expected: User) {
        expect(this.mockSave).toHaveBeenCalledWith(expected);
    }
}
