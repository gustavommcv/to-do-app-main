import axios from "axios";

// eslint-disable-next-line no-unused-vars
export default async function detailsLoader({ request, params }) {
    const task = (await axios.get('http://localhost:3000/api/tasks/' + params.taskId, {
        withCredentials: true
    })).data;

    const statuses = (await axios.get('http://localhost:3000/api/tasks/task-status')).data;

    const response = {
        task,
        statuses
    }

    return response;
}
