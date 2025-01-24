import axios from "axios";

export default async function tasksLoader() {
    const tasks = await axios.get('http://localhost:3000/api/tasks');

    const statuses = await axios.get('http://localhost:3000/api/tasks/task-status');

    const response = {
        tasks: tasks.data,
        statuses: statuses.data
    }

    return response;
}
