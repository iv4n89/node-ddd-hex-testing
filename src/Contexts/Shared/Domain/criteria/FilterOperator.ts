import { InvalidArgumentError } from "../InvalidArgumentError";
import { EnumValueObject } from "../valueObject/EnumValueObject";

export enum Operator {
    EQUAL = '=',
    NOT_EQUAL = '!=',
    GT = '>',
    LT = '<',
    CONTAINS = 'CONTAINS',
    NOT_CONTAINS = 'NOT_CONTAINS'
};

export class FilterOperator extends EnumValueObject<Operator> {
    constructor(value: Operator) {
        super(value, Object.values(Operator));
    }

    static fromValues(value: string): FilterOperator {
        for (const operatorValue of Object.values(Operator)) {
            if (value === operatorValue.toString()) {
                return new FilterOperator(operatorValue);
            }
        }

        throw new InvalidArgumentError(`The filter operator ${value} is invalid`);
    }

    public isPositive(): boolean {
        return this.value !== Operator.NOT_EQUAL && this.value !== Operator.NOT_CONTAINS;
    }

    protected throwErrorForInvalidValue(value: Operator): void {
        throw new InvalidArgumentError(`The filter operator ${value} is invalid`);    
    }

    static equal() {
        return this.fromValues(Operator.EQUAL);
    }
}
