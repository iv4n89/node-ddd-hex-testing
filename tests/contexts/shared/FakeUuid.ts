import { FakerCreator } from "./FakerCreator";

export class FakeUuid {
    static random(): string {
        return FakerCreator.random().datatype.uuid();
    }
}
