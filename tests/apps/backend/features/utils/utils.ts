import { User } from "@contexts/User/Domain/User";
import { userRepository } from "@contexts/User/Infrastructure/dependencies/dependencies";

export const createFakeUsers = async () => {
    const userOne = {
        id: 'e981542e-e614-4693-a456-b3b723bfaec2',
        name: 'test1',
        email: 'test1@mail.com',
        password: 'Nomelase1.0'
    };

    const userTwo = {
        id: 'e7719402-e7e7-4b78-bf76-e0178c513dac',
        name: 'test2',
        email: 'test2@mail.com',
        password: 'Nomelase2.0'
    };

    const userThree = {
        id: 'f2a65e1a-872d-4399-9b9e-ca5c9bb5cf25',
        name: 'test3',
        email: 'test3@mail.com',
        password: 'Nomelase3.0'
    };

    [userOne, userTwo, userThree].forEach(async (u) => {
        await userRepository.save(User.fromPrimitives({ ...u }));
    });
}
