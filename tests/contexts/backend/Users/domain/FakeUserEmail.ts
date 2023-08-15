import { Nullable } from "@contexts/Shared/Infrastructure/Nullable";
import { UserEmail } from "@contexts/User/Domain/UserEmail";
import { FakeInteger } from "@tests/contexts/shared/FakeInteger";
import { FakerCreator } from "@tests/contexts/shared/FakerCreator";
import { FakeWord } from "@tests/contexts/shared/FakeWord";

export class FakeUserEmail {
    static create(value: string): UserEmail {
        return new UserEmail(value);
    }

    static random(): UserEmail {
        return new UserEmail(FakerCreator.random().internet.email());
    }

    static invalid(caseName: 'type' | 'format' | 'empty' | 'undefined'): Nullable<string | number> {
        switch (caseName) {
            case 'type':
                return FakeInteger.random();
            case 'format':
                return `${FakeWord.random({ maxLength: 5 })}`;
            case 'empty':
                return '';
            case 'undefined':
                return undefined;
            default:
                break;
        }
    }
}
