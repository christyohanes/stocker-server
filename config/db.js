// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('stocker', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgresql'
});
 
// export connection
export default db;
