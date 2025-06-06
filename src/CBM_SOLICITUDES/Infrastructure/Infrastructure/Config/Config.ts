'use strict';

import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const {
    PORT,
    HOST,
    HOST_URL,
    SQL_USER,
    SQL_PASSWORD,
    SQL_DATABASE,
    SQL_SERVER
} = process.env;

if (!SQL_USER || !SQL_PASSWORD || !SQL_DATABASE || !SQL_SERVER) {
    throw new Error('Faltan variables de entorno requeridas para la configuración de SQL');
}

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

const config = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    }
};

export default config;