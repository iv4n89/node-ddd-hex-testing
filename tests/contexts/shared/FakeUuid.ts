import { FakerCreator } from "./FakerCreator";

export class FakeUuuid {
    static random(): string {
        return FakerCreator.random().datatype.uuid();
    }
}
