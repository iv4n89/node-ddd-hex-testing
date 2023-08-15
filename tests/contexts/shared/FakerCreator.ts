import * as faker from 'faker';

export class FakerCreator {
    static random(): Faker.FakerStatic {
        return faker;
    }
}
