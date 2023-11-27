import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    "coveragePathIgnorePatterns": [
        "node_modules",
        "<rootDir>/src/infrastructure/database/*",
        "<rootDir>/src/infrastructure/routes/middlewares/dependencies.ts",
        ".mock.ts"
    ],
};

export default config;
