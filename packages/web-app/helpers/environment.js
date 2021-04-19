const fs = require('fs');

const pathToEnvFile = '../../.env';

const getPathToEnvFile = () => {
    if (fs.existsSync(pathToEnvFile)) {
        return pathToEnvFile;
    }
    else {
        console.log('[web-application] .env file does not exitst');
    }
}

module.exports = {
    getPathToEnvFile
}