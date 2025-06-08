import sql from 'mssql';
import config from './Config';

export const executeStoredProcedure = async (procedureName: string,
                                             parameters: { name: string; value: any }[] = []) => {
    try {
        let pool = await sql.connect(config.sql);
        let request = pool.request();

        parameters.forEach(param => {
            request.input(param.name, param.value);
        });

        const result = await request.execute(procedureName);
        return result.recordset;
    } catch (error) {
        throw error;
    }
};