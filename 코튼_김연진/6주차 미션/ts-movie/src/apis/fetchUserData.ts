import axios from 'axios';

const fetchUserData = async () => {
    try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:3000/user/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

export default fetchUserData;
