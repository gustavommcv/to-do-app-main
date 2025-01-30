import { redirect } from 'react-router-dom';
import axios from "axios";

export async function getAuthToken() {
    try {
        const response = await axios.get('http://localhost:3000/api/auth/token', {
            withCredentials: true
        });

        if (response.data.token) {
            return response.data.token;
        } else {
            return null;
        }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
        return null;
    }
}

export async function tokenLoader() {
    const token = await getAuthToken();
    return token;
}

export async function checkAuthLoader() {
    const token = await getAuthToken();

    if (!token) {
        return redirect('/login');
    }
    return null;
}
