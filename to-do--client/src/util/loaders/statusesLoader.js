import axios from "axios";

export default async function statusesLoader() {
    const statuses = (await axios.get('http://localhost:3000/api/tasks/task-status')).data;

    return statuses;
}
