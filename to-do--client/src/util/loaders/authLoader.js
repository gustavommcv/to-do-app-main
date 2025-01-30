import { redirect } from 'react-router-dom';
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function getAuthToken() {
    try {
        const response = await axios.get(`${apiUrl}/auth/token`, {
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
