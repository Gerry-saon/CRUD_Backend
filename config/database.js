import { Sequelize } from "sequelize";

    const db = new Sequelize('be_crud', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    });


    export default db;