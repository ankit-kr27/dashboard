import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';

const initialState = {
    isLoading: false,
    stats: {},
    error: null,
    message: '',
};

export const getStats = createAsyncThunk(
    'stats/getStats',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`${import.meta.env.VITE_SERVER_URL}/proxy/api/v1/sample_assignment_api_1/`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch stats");
        }
    }
);

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStats.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getStats.fulfilled, (state, action) => {
                state.isLoading = false;
                state.stats = action.payload;
                state.message = 'Stats fetched successfully!';
            })
            .addCase(getStats.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { clearStats } = statsSlice.actions;

export default statsSlice.reducer;
