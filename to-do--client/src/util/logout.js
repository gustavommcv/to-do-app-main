import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const logout = async () => {
  try {
    const response = await axios.get(`${apiUrl}/auth/logout`, {
      withCredentials: true,
    });

    if (response.status === 200) {
      window.location.href = '/'; 
    } else {
      console.log('Logout error:', response.statusText);
    }
  } catch (error) {
    console.error('Logout network error:', error);
  }
};
