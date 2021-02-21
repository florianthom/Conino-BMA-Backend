import { Dataloaders } from "../types/dataloaders";
import { createProjectLoaderByUserId } from "./project/createProjectLoaderByUserId";
import { createUserLoaderByProjectId } from "./user/createUserLoaderByProjectId";
import { createProjectLoaderByMaturityModelId } from "./project/createProjectLoaderByMaturityModelId";
import { createUserPartialModelLoaderByMaturityModelId } from "./userPartialModel/createUserPartialModelLoaderByMaturityModelId";
import { createMaturityModelLoaderByUserPartialModelId } from "./maturityModel/createMaturityModelLoaderByUserPartialModelId";
import { createMaturityModelLoaderByProjectId } from "./maturityModel/createMaturityModelLoaderByProjectId";
import { createUserPartialModelLoaderByUserPartialModelId } from "./userPartialModel/createUserPartialModelLoaderByUserPartialModelId";

export function createDataloaders(): Dataloaders {
    return {
        project: {
            loaderByUserId: createProjectLoaderByUserId(),
            loaderByMaturityModelId: createProjectLoaderByMaturityModelId(),
        },
        user: {
            loaderByProjectId: createUserLoaderByProjectId(),
        },
        maturityModel: {
            loaderByProjectId: createMaturityModelLoaderByProjectId(),
            loaderByUserPartialModelId: createMaturityModelLoaderByUserPartialModelId(),
        },
        userPartialModel: {
            loaderByMaturityModelId: createUserPartialModelLoaderByMaturityModelId(),
            loaderByUserPartialModelId: createUserPartialModelLoaderByUserPartialModelId(),
        },
    };
}