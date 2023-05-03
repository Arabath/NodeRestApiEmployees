import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Rbmk1986Boom',
    port: 3306,
    database: 'companydb'
})

