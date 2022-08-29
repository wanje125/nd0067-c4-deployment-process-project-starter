import dotenv from 'dotenv'
import { Sequelize } from 'sequelize-typescript'

dotenv.config()
const c = dotenv.config({ path: './.env' }).parsed
import { FeedItem } from "./controllers/v0/feed/models/FeedItem";
import { User } from "./controllers/v0/users/models/User";


console.log(c);

const sequelize = new Sequelize({
    username: c?.POSTGRES_USER,
    password: c?.POSTGRES_PASSWORD,
    database: c?.POSTGRES_DB,
    host: c?.POSTGRES_HOST,
    port: 5432,
    dialect: "postgres",
    storage: ":memory:",
    models:[User,FeedItem],
});

export default sequelize;
