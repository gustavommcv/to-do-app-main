import axios from 'axios';

export const logout = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/auth/logout', {
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
