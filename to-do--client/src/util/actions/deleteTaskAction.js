import axios from "axios";
import { redirect } from "react-router-dom";

export default async function deleteTaskAction({ params }) {
    const id = params.taskId;

    try {
        const response = await axios.delete(`http://localhost:3000/api/tasks/${id}`);

        if (response.status !== 200) {
            throw new Error('Failed to delete task');
        }

        return redirect('/');
    } catch (error) {
        console.error('Error deleting task: ', error);
        throw error;
    }
}
