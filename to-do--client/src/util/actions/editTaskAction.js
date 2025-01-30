import axios from 'axios';
import { redirect } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

export default async function editTaskAction({ request, params }) {
    const data = await request.formData();

    const taskData = {
        id: params.taskId,
        title: data.get('title'),
        description: data.get('description'),
        status: data.get('status'),
    };

    try {
        const response = await axios.put(`${apiUrl}/tasks/${taskData.id}`, taskData, {
            withCredentials: true
        });
        if (response.status === 201 || response.status === 204 || response.status === 200) {
            return redirect('/tasks');
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return { errors: error.response.data.errors };
        }
        
        console.error('Error to edit task:', error);
        throw error;
    }
}
