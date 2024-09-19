import { configureStore } from '@reduxjs/toolkit';
import { setupInterceptors } from '../../utils/axios';

import authReducer from '../features/authSlice';
import statsReducer from '../features/statsSlice';
import comparisonReducer from '../features/comparisonSlice';
import topProductsReducer from '../features/topProductsSlice';
import scoreReducer from '../features/scoreSlice';
import feedbackReducer from '../features/feedbackSlice';
import salesReducer from '../features/salesSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        stats: statsReducer,
        comparison: comparisonReducer,
        topProducts: topProductsReducer,
        score: scoreReducer,
        feedback: feedbackReducer,
        sales: salesReducer,
    },
});

setupInterceptors(store);

export default store;
