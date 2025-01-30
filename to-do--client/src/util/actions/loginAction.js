import axios from "axios";
import { redirect } from "react-router-dom";

export default async function loginAction({ request }) {
    const data = await request.formData();

    const user = {
        email: data.get('email'),
        password: data.get('password')
    }

    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', user, {
            withCredentials: true
        });

        console.log(response)

        if (response.status === 201 || response.status === 204 || response.status === 200) {
            return redirect('/');
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return { errors: error.response.data.errors };
        }

        console.error(error);
        throw error;
    }
}
