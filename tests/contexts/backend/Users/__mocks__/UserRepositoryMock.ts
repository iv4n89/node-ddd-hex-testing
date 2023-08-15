import { Nullable } from "@src/Contexts/Shared/Infrastructure/Nullable";
import { User } from "@src/Contexts/User/Domain/User";
import { UserId } from "@src/Contexts/User/Domain/UserId";
import { UserRepository } from "@src/Contexts/User/Domain/UserRepository";

export class UserRepositoryMock implements UserRepository {
    private readonly mockSave;
    
    constructor() {
        this.mockSave = jest.fn();
    }
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    findOne(userId: UserId): Promise<Nullable<User>> {
        throw new Error("Method not implemented.");
    }
    delete(userId: UserId): Promise<void> {
        throw new Error("Method not implemented.");
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
