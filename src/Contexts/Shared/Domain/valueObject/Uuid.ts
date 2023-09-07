import validate from 'uuid-validate';
import { InvalidArgumentError } from '../InvalidArgumentError';
import { StringValueObject } from './StringValueObject';

export class Uuuid extends StringValueObject {

    constructor(value: string) {
        super(value);
    }

    protected ensureChain(value: string): void {
        super.ensureChain(value);
        this.ensureIsValidUuid(value);
    }

    private ensureIsValidUuid(value: string): void {
        if (!validate(value)) {
            throw new InvalidArgumentError(`The value [${value}] is not a valid UUID`);
        }
    }

}
