import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Note = db.define('notes', {
    nama: DataTypes.STRING,
    asal_kota: DataTypes.STRING,
    hobi: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Note;

(async()=>{
    await db.sync();
})();