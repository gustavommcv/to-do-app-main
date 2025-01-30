import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

// eslint-disable-next-line no-unused-vars
export default async function detailsLoader({ request, params }) {
    const task = (await axios.get(`${apiUrl}/tasks/` + params.taskId, {
        withCredentials: true
    })).data;

    const statuses = (await axios.get(`${apiUrl}/tasks/task-status`)).data;

    const response = {
        task,
        statuses
    }

    return response;
}
