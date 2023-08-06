import { Sequelize } from "sequelize";
import db from "../config/database.js";

    const {DataTypes} = Sequelize;

    const User = db.define('users', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        gander: DataTypes.STRING,
        address: DataTypes.STRING,
        handphone: DataTypes.STRING
    }, {
        freezeTableName:true
    });

    export default User;

(async()=> {
    await db.sync();
})();