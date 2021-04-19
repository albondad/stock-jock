const dotenv = require('dotenv');
const { getPathToEnvFile } = require('./helpers/environment');

dotenv.config({path: getPathToEnvFile()})

const environmentVariables = {
    WEB_APP_FIREBASE_API_KEY: process.env.WEB_APP_FIREBASE_API_KEY,
    WEB_APP_FIREBASE_AUTH_DOMAIN: process.env.WEB_APP_FIREBASE_AUTH_DOMAIN,
    WEB_APP_FIREBASE_PROJECT_ID: process.env.WEB_APP_FIREBASE_PROJECT_ID,
    WEB_APP_FIREBASE_STORAGE_BUCKET: process.env.WEB_APP_FIREBASE_STORAGE_BUCKET,
    WEB_APP_FIREBASE_MESSEAGING_SENDER_ID: process.env.WEB_APP_FIREBASE_MESSEAGING_SENDER_ID,
    WEB_APP_FIREBASE_APP_ID: process.env.WEB_APP_FIREBASE_APP_ID,
    WEB_APP_FIREBASE_MEASUREMENT_ID: process.env.WEB_APP_FIREBASE_MEASUREMENT_ID,
}

module.exports = {
    env: {
        ...environmentVariables
    }
  }