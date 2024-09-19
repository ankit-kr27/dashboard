import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';

const initialState = {
    isLoading: false,
    topProducts: [],
    error: null,
    message: '',
};

export const getTopProductsData = createAsyncThunk(
    'topProducts/getTopProductsData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`${import.meta.env.VITE_SERVER_URL}api/v1/top_products/`);
            console.log(response);
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch top products data");
        }
    }
);

const topProductsSlice = createSlice({
    name: 'topProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTopProductsData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getTopProductsData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.topProducts = action.payload;
                state.message = 'Top products data fetched successfully!';
            })
            .addCase(getTopProductsData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default topProductsSlice.reducer;
