import { UserCreator } from "@contexts/User/Application/Create/UserCreator";
import { FakeUser } from "../domain/FakeUser";
import { UserRepositoryMock } from "../__mocks__/UserRepositoryMock";
import { FakeCreateUserRequest } from "./FakeCreateUserRequest";

let repository: UserRepositoryMock;
let creator: UserCreator;

beforeEach(() => {
    repository = new UserRepositoryMock();
    creator = new UserCreator(repository);
});

describe('UserCreator', () => {
    it('should create a valid user', async () => {
        const request = FakeCreateUserRequest.random();
        const user = FakeUser.fromRequest(request);
        await creator.run(request);
        repository.assertLastSavedUserIs(user);
    })
})
