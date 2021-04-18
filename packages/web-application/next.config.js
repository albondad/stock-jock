const dotenv = require('dotenv');
const { getPathToEnvFile } = require('./helpers/get-path-to-env-file');

dotenv.config({path: getPathToEnvFile()})

module.exports = {
    env: {
        customKey: 'my-value',
    },
}