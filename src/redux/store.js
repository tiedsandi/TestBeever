import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quote';

const rootReducer = {
    quote: quoteReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;