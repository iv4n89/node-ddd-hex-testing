import { InvalidArgumentError } from "../../Shared/Domain/InvalidArgumentError";
import { StringValueObject } from "../../Shared/Domain/valueObject/StringValueObject";

export class UserPassword extends StringValueObject {
    protected ensureChain(value: string): void {
        super.ensureChain(value);
        this.ensureIsAValidPassword(value);
    }

    private ensureIsAValidPassword(value: string): void {
        if (value.length < 8) {
            throw new InvalidArgumentError(`The password is not enough`);
        }
    }
}
