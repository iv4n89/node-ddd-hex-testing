import { UserId } from "@contexts/User/Domain/UserId";
import { FakeUuid } from "@contexts-test/shared/FakeUuid";

export class FakeUserId {
    static create(value: string): UserId {
        return new UserId(value);
    }

    static random(): UserId {
        return this.create(FakeUuid.random());
    }
}
