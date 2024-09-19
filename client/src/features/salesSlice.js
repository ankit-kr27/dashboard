import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios'; 

const initialState = {
    isLoading: false,
    salesData: [],
    error: null,
};

export const getSalesData = createAsyncThunk(
    'sales/getSalesData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/sales_data/`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Failed to fetch sales data'
            );
        }
    }
);

const salesDataSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSalesData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getSalesData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.salesData = action.payload;
            })
            .addCase(getSalesData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default salesDataSlice.reducer;
