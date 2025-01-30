import axios from "axios";
import { redirect } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

export default async function deleteTaskAction({ params }) {
    const id = params.taskId;

    try {
        const response = await axios.delete(`${apiUrl}/tasks/${id}`, {
            withCredentials: true
        });

        if (response.status !== 200) {
            throw new Error('Failed to delete task');
        }

        return redirect('/tasks');
    } catch (error) {
        console.error('Error deleting task: ', error);
        throw error;
    }
}
