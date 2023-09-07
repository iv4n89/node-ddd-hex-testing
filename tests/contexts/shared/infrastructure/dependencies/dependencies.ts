import { mongoClient } from "@contexts/User/Infrastructure/dependencies/dependencies";
import { EnvironmentArranger } from "../arranger/EnvironmentArranger";
import { MongoEnvironmentArranger } from "../mongo/ MongoEnvironmentArranger";

export const arranger: EnvironmentArranger = new MongoEnvironmentArranger(mongoClient);
