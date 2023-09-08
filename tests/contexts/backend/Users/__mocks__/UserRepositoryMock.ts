import { Nullable } from "@contexts/Shared/Domain/Nullable";
import { User } from "@contexts/User/Domain/User";
import { UserId } from "@contexts/User/Domain/UserId";
import { SearchCriteria, UserRepository } from "@contexts/User/Domain/UserRepository";

export class UserRepositoryMock implements UserRepository {
    private readonly mockSave;
    private readonly mockFindOne;
    private readonly mockFindAll;
    private readonly mockDelete;
    private readonly mockSearch;
    
    constructor() {
        this.mockSave = jest.fn();
        this.mockFindOne = jest.fn();
        this.mockFindAll = jest.fn();
        this.mockDelete = jest.fn();
        this.mockSearch = jest.fn();
    }
    async findAll(): Promise<User[]> {
        return this.mockFindAll();
    }
    async findOne(userId: UserId): Promise<Nullable<User>> {
        return this.mockFindOne(userId);
    }
    async delete(userId: UserId): Promise<void> {
        return this.mockDelete(userId);
    }
    async search(criteria: SearchCriteria): Promise<Nullable<User[]>> {
        return this.mockSearch(criteria);
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
