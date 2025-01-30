import { DataTypes } from "sequelize";
import sequelize from "../config/db/database.js";

const User = sequelize.define("User", {
  id: {
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    type: DataTypes.UUID,
  },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

export default User;
