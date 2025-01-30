import { DataTypes } from "sequelize";
import sequelize from "../config/db/database.js";
import TaskStatus from "./enums/TaskStatus.js";

const Task = sequelize.define("Task", {
  id: {
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    type: DataTypes.UUID,
  },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: TaskStatus.PENDING,
    validate: {
      isIn: [Object.values(TaskStatus)],
    },
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: { model: "users", key: "id" },
    onDelete: "CASCADE",
  },
}, {
  tableName: "tasks",
  timestamps: false,
});

export default Task;
