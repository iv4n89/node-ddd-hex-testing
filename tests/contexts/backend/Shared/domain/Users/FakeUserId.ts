import { UserId } from "@contexts/User/Domain/UserId";
import { FakeUuuid } from "@contexts-test/shared/FakeUuid";

export class FakeUserId {
    static create(value: string): UserId {
        return new UserId(value);
    }

    static random(): UserId {
        return this.create(FakeUuuid.random());
    }
}
