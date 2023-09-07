import { StringValueObject } from "../valueObject/StringValueObject";

export class OrderBy extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}
