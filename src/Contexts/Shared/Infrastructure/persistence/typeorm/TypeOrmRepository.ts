import { AggregateRoot } from "@contexts/Shared/Domain/AggregateRoot";
import { DataSource, EntitySchema, Repository } from "typeorm";

export abstract class TypeOrmRepository<T extends AggregateRoot> {
    constructor(private _client: Promise<DataSource>) {}

    protected abstract entitySchema(): EntitySchema<T>;

    protected client(): Promise<DataSource> {
        return this._client;
    }

    protected async repository(): Promise<Repository<T>> {
        return (await this.client()).getRepository(this.entitySchema());
    }

    protected async persist(aggregateRoot: T): Promise<void> {
        const repository = await this.repository();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await repository.save(aggregateRoot as any);
    }
}
