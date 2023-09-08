import { UserEmail } from "@contexts/User/Domain/UserEmail";
import { UserId } from "@contexts/User/Domain/UserId";
import { UserName } from "@contexts/User/Domain/UserName";
import { SearchCriteria, UserRepository } from "@contexts/User/Domain/UserRepository";

interface Params {
    id?: string;
    name?: string;
    email?: string;
}

function convertToValueObjects(object: Params) {
    const result: SearchCriteria = {};
    if (object.id) {
        result.id = new UserId(object.id);
    }
    if (object.name) {
        result.name = new UserName(object.name);
    }
    if (object.email) {
        result.email = new UserEmail(object.email);
    }
    return result;
}

export class UserSearcher {
    constructor(private userRepository: UserRepository) {}
   
    async run(criteria: Params) {
        const users = await this.userRepository.search(convertToValueObjects(criteria));

        return users?.map(u => u.toPrimitives());
    }
}
