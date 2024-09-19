import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';

const initialState = {
    isLoading: false,
    feedback: {
        positive: 0,
        neutral: 0,
        negative: 0,
    },
    error: null,
};

export const getFeedbackData = createAsyncThunk(
    'feedback/fetchFeedbackData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(
                `${import.meta.env.VITE_REST_API_URL}api/v1/sample_assignment_api_5/`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Failed to fetch feedback data'
            );
        }
    }
);

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFeedbackData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getFeedbackData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.feedback = action.payload;
            })
            .addCase(getFeedbackData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default feedbackSlice.reducer;
