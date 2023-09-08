import { InvalidArgumentError } from "@contexts/Shared/Domain/InvalidArgumentError";
import { StringValueObject } from "@contexts/Shared/Domain/valueObject/StringValueObject";

export class UserName extends StringValueObject {
    protected ensureChain(value: string): void {
        super.ensureChain(value);
        this.ensureNameHasMoreThan5Chars(value);
        this.ensureNameDontStartWithNumber(value);
    }

    private ensureNameHasMoreThan5Chars(value: string) {
        if (value.length < 2) {
            throw new InvalidArgumentError(`The name [${value}] has to be more than 2 characters`);
        }
    }

    private ensureNameDontStartWithNumber(value: string) {
        if (Number(value.charAt(0))) {
            throw new InvalidArgumentError(`The name [${value}] can not start with a number`);
        }
    }

    protected createValueObject(value: string): StringValueObject {
        return new UserName(value);
    }
}
