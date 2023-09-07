import { InvalidArgumentError } from "../InvalidArgumentError";

export type Primitives = string | string | boolean | boolean | number | number | Date;

export abstract class ValueObject<T extends Primitives> {
    readonly value;

    constructor(value: T) {
        this.ensureChain(value);
        this.ensureItHasAValue(value);
        this.value = value;
    }

    private ensureItHasAValue(value: T) {
        if (!value) {
            throw new InvalidArgumentError('A valid value has to be provided')
        }
    }

    protected abstract ensureChain(value: T): void;

    equals(other: ValueObject<T>): boolean {
        return other.constructor.name === this.constructor.name && other.value === this.value;
    }

    toString(): string {
        return this.value.toString();
    }
}
