import axios from 'axios';
import { redirect } from 'react-router-dom';

export default async function newTaskAction({ request }) {
    const data = await request.formData();

    const taskData = {
        title: data.get('title'),
        description: data.get('description'),
        status: data.get('status')
    };

    console.log(taskData);

    try {
        const response = await axios.post('http://localhost:3000/api/tasks', taskData);

        if (response.status !== 201) {
            throw new Error('Failed to create new task');
        }

        return redirect('/');
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}
