import { FakerCreator } from "./FakerCreator";

export class FakeWord {
    static random({ minLength = 0, maxLength }: { minLength?: number; maxLength: number }): string {
        return (
            FakerCreator.random().lorem.word(
                Math.floor(Math.random() * (maxLength - minLength)) + minLength
            ) || 'word'
        );
    }
}
