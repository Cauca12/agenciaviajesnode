import Sequelize from "sequelize";
import db from './config/db.js'
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorAliases: false
});

export default db;