import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';

const initialState = {
    isLoading: false,
    comparisonData: [],
    error: null,
    message: '',
};

export const getComparisonData = createAsyncThunk(
    'comparison/getComparisonData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/comparision_data`);
            // console.log(response);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch comparison data");
        }
    }
);

const comparisonSlice = createSlice({
    name: 'comparison',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getComparisonData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getComparisonData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.comparisonData = action.payload;
                state.message = 'Comparison data fetched successfully!';
            })
            .addCase(getComparisonData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default comparisonSlice.reducer;
