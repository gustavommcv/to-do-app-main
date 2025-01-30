import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export default async function statusesLoader() {
    const statuses = (await axios.get(`${apiUrl}/tasks/task-status`)).data;

    return statuses;
}
