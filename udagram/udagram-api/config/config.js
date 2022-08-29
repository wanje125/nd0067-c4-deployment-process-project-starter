const dotenv = require('dotenv');

const c = dotenv.config({ path: './.env' }).parsed
module.exports = {
    username: `${c.POSTGRES_USER}`,
    password: c.POSTGRES_PASSWORD,
    database: c.POSTGRES_DB,
    port: 5432,
    host: c.POSTGRES_HOST,
    dialect: 'postgres',
    dialectOptions: {
        bigNumberStrings: true
    },
    
}
// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed


