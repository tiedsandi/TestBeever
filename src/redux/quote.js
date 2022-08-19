import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

import { quoteAPI } from '../provider/api';

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
    const data = await quoteAPI.get('/');
    return data.data.quote;
});

const initialState = {
    quote: '',
    favorites: [],
    myQuotes: [],
};

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
        addQuote: (state, action) => {
            if (!state.myQuotes.includes(action.payload)) {
                state.myQuotes.push(action.payload);
            }
        },
    },
    extraReducers: {
        [fetchQuote.fulfilled]: (state, action) => {
            state.quote = action.payload;
        }
    }
})

export const { addFavorite, addQuote } = quoteSlice.actions;
export default quoteSlice.reducer;