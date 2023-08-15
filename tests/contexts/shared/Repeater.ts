import { FakeInteger } from "./FakeInteger";

export class Repeater {
    static random(callable: (...args) => unknown, iterations: number) {
        return Array(iterations || FakeInteger.random(20))
            .fill({})
            .map(() => callable());
    }
}
