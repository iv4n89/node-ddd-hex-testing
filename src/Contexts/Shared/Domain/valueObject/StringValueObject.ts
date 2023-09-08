import { InvalidArgumentError } from "../InvalidArgumentError";
import { ValueObject } from "./ValueObject";

export class StringValueObject extends ValueObject<string> {
    protected ensureChain(value: string): void {
        this.ensureItIsNotAnEmptyString(value);
    }

    protected createValueObject(value: string) {
        return new StringValueObject(value);
    }

    private ensureItIsNotAnEmptyString(value: string) {
        if (value.length < 1) {
            throw new InvalidArgumentError('The value can not be empty');
        }
    }

    public searchMode(): StringValueObject {
        return this.createValueObject(`%${this.value}%`);
    }
}
