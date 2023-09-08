import { dataSource } from "@contexts/User/Infrastructure/dependencies/dependencies";
import { EnvironmentArranger } from "../arranger/EnvironmentArranger";
import { TypeOrmEnvironmentArranger } from "../typeorm/TypeOrmEnvironmentArranger";

export const arranger: EnvironmentArranger = new TypeOrmEnvironmentArranger(dataSource);
