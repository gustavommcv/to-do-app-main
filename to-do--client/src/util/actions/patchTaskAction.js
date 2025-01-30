import axios from 'axios';
import { redirect } from 'react-router-dom';

export default async function patchTaskAction({ request, params }) {
    const formData = await request.formData();

    const data = Object.fromEntries(formData.entries());
    const taskId = params.taskId;

    try {
        const response = await axios.patch(`http://localhost:3000/api/tasks/${taskId}`, data, {
            withCredentials: true
        });

        if (![200, 204, 201].includes(response.status)) {
            throw new Error('Failed to update task');
        }

        return redirect('/tasks');
    } catch (error) {
        console.error('Error editing task:', error.message || error);
        throw new Error('Could not edit the task. Please try again.');
    }
}
