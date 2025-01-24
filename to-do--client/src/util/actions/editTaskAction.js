import axios from 'axios';
import { redirect } from 'react-router-dom';

export default async function editTaskAction({ request, params }) {
    const data = await request.formData();

    const taskData = {
        id: params.taskId,
        title: data.get('title'),
        description: data.get('description'),
        status: data.get('status'),
    };

    try {
        const response = await axios.put(`http://localhost:3000/api/tasks/${taskData.id}`, taskData);

        if (![200, 204, 201].includes(response.status)) {
            throw new Error('Failed to update task');
        }

        return redirect('/');
    } catch (error) {
        console.error('Error editing task:', error.message || error);
        throw new Error('Could not edit the task. Please try again.');
    }
}
