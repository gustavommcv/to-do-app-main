import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export default async function tasksLoader() {
    const tasks = await axios.get(`${apiUrl}/tasks`, {
        withCredentials: true
    });

    const statuses = await axios.get(`${apiUrl}/tasks/task-status`);

    const response = {
        tasks: tasks.data,
        statuses: statuses.data
    }

    return response;
}
