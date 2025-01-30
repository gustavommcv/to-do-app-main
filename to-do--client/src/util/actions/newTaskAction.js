import axios from 'axios';
import { redirect } from 'react-router-dom';

export default async function newTaskAction({ request }) {
    const data = await request.formData();

    const taskData = {
        title: data.get('title'),
        description: data.get('description'),
        status: data.get('status')
    };

    try {
        const response = await axios.post('http://localhost:3000/api/tasks', taskData, {
            withCredentials: true
        });
        if (response.status === 201) {
            return redirect('/tasks');
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return { errors: error.response.data.errors };
        }

        console.error('Error creating task:', error);
        throw error;
    }
}
