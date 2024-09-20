import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    username: '',
    password: '',
    error: null,
    message: '',
};

export const loginUser = createAsyncThunk(
    'auth/login',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(
                `${import.meta.env.VITE_SERVER_URL}/proxy/api/v1/login`,
                formData
            );
            console.log(response);

            if (
                response.data.message === 'Incorrect Username' ||
                response.data.message === 'Incorrect Password'
            ) {
                return rejectWithValue(response.data.message);
            }

            return {
                message: response.data.message,
                username: formData.username,
                password: formData.password,
            };
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.isAuthenticated = false;
            state.username = '';
            state.password = '';
            state.message = '';
            state.error = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.message = action.payload.message;
                state.username = action.payload.username;
                state.password = action.payload.password;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
