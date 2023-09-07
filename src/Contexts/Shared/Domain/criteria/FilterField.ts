import { StringValueObject } from "@contexts/Shared/Domain/valueObject/StringValueObject";

export class FilterField extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}
