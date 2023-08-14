/* eslint-disable camelcase */
const common = [
    '--require-module ts-node/register'
];

const backend = [
    ...common,
    'tests/apps/backend/features/**/*.feature',
    '--require tests/apps/backend/features/step_definition/*.steps.ts'
].join(' ');

module.exports = {
    backend
};
