import axios from "axios";
import { redirect } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

export default async function loginAction({ request }) {
    const data = await request.formData();

    const user = {
        email: data.get('email'),
        password: data.get('password')
    }

    try {
        const response = await axios.post(`${apiUrl}/auth/login`, user, {
            withCredentials: true
        });

        console.log(response)

        if (response.status === 201 || response.status === 204 || response.status === 200) {
            return redirect('/');
        }
    } catch (error) {
        if (error.response && (error.response.status === 400 || error.response.status === 401)) {
            return { errors: error.response.data.errors };
        }

        console.error(error);
        throw error;
    }
}
