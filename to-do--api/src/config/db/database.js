import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
    dialect: 'mariadb',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");
        
        // Importing associations before Sync
        await import("../../models/associations.js");

        // Models Sync
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

export default sequelize;
