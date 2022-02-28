// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/db.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const User = db.define('users', {
  // Define attributes
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.DOUBLE
  },
  photo: {
    type: DataTypes.STRING
  },
},{
  timestamps: false
});
 
// Export model User
export default User;