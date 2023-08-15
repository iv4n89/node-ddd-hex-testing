import { Nullable } from "@src/Contexts/Shared/Infrastructure/Nullable";
import { UserName } from "@src/Contexts/User/Domain/UserName";
import { FakeInteger } from "@tests/contexts/shared/FakeInteger";
import { FakerCreator } from "@tests/contexts/shared/FakerCreator";
import { FakeWord } from "@tests/contexts/shared/FakeWord";

export class FakeUserName {
    static create(value: string): UserName {
        return new UserName(value);
    }

    static random(): UserName {
        return this.create(FakerCreator.random().name.firstName());
    }

    static invalidName(caseName: 'type' | 'length' | 'empty' | 'undefined'): Nullable<string | number> {
        switch (caseName) {
            case 'type':
                return FakeInteger.random();
            case 'length':
                return FakeWord.random({ minLength: 20, maxLength: 30 });
            case 'empty':
                return '';
            case 'undefined':
                return undefined;
            default: 
                break;
        }
    } 
}
