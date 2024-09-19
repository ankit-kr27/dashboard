import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setupInterceptors = (store) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            const { auth } = store.getState();
            if (auth.username && auth.password) {
                config.auth = {
                    username: auth.username,
                    password: auth.password
                };
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

export default axiosInstance;
