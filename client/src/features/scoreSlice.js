import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';

const initialState = {
    isLoading: false,
    score: 0,
    title: '',
    message: '',
    error: null,
};

export const getScoreData = createAsyncThunk(
    'score/getScoreData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(
                `${import.meta.env.VITE_REST_API_URL}/api/v1/sample_assignment_api_3/`
            );
            console.log(response);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Failed to fetch score data'
            );
        }
    }
);

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getScoreData.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getScoreData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.score = action.payload.score;
                state.title = action.payload.title;
                state.message = action.payload.message;
            })
            .addCase(getScoreData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default scoreSlice.reducer;
