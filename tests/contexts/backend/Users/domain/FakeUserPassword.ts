import { Nullable } from "@contexts/Shared/Domain/Nullable";
import { UserPassword } from "@contexts/User/Domain/UserPassword";
import { FakeInteger } from "@tests/contexts/shared/FakeInteger";
import { FakerCreator } from "@tests/contexts/shared/FakerCreator";
import { FakeWord } from "@tests/contexts/shared/FakeWord";

export class FakeUserPassword {
    static create(value: string): UserPassword {
        return new UserPassword(value);
    }

    static random(): UserPassword {
        return new UserPassword(FakerCreator.random().internet.password(8, false, /\w/, '!A0o'));
    }

    static invalid(caseName: 'type' | 'length' | 'format' | 'empty' | 'undefined'): Nullable<string | number> {
        switch (caseName) {
            case 'type':
                return FakeInteger.random();
            case 'length':
                return FakeWord.random({ maxLength: 3 });
            case 'format':
                return FakerCreator.random().internet.password(8, false, /\w/, 'A');
            case 'empty':
                return '';
            case 'undefined':
                return undefined;
            default:
                break;
        }
    }
}
