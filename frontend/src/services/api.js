import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_TOKEN}` // Replace with your auth token logic
    }
});

// Interceptor to handle common API errors
apiClient.interceptors.response.use(
    response => response,
    error => {
        // Handle errors globally
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default apiClient;
