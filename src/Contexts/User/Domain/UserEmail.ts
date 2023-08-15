import { InvalidArgumentError } from "@contexts/Shared/Infrastructure/InvalidArgumentError";
import { StringValueObject } from "@contexts/Shared/Infrastructure/valueObject/StringValueObject";

export class UserEmail extends StringValueObject {
    protected ensureChain(value: string): void {
        super.ensureChain(value);
        this.ensureIsAnEmail(value);
    }

    private ensureIsAnEmail(value: string): void {
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
            throw new InvalidArgumentError(`The email [${value}] has not a valid email format`);
        }
    }
}
