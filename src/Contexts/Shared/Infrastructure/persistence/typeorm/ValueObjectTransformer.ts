/* eslint-disable @typescript-eslint/no-explicit-any */
import { Primitives, ValueObject } from "@contexts/Shared/Domain/valueObject/ValueObject";
import { NewableClass } from '../../../Domain/NewableClass';

export const ValueObjectTransformer = <T extends Primitives>(ValueObject: NewableClass<ValueObject<any>>) => {
    return {
        to: (value: ValueObject<T>): T => value.value,
        from: (value: T): ValueObject<T> => new ValueObject(value)
    }
}
