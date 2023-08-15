import { FakerCreator } from "./FakerCreator";

export class FakeInteger {
    static random(max?: number): number {
        return FakerCreator.random().datatype.number(max);
    }
}
