import { DataTypes } from "sequelize";

import sequelize from "../config/db/database.js";
import TaskStatus from "./enums/TaskStatus.js";

const Task = sequelize.define('Task', {
    id: {
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    status: {
        type: DataTypes.ENUM(...Object.values(TaskStatus)),
        allowNull: false,
        defaultValue: TaskStatus.PENDING
    }
})

export default Task;
