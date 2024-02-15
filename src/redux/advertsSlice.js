import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchAdvertsByMake, fetchMakes } from './operations';
import { LIMIT_PER_PAGE } from '../config/config';

const advertSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    makes: [],
    page: 1,
    isLoading: false,
    error: null,
    filter: '',
    isLastPage: false,
  },
  reducers: {
    setPageValue(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = [...state.adverts, ...action.payload];
        state.isLastPage = action.payload.length < LIMIT_PER_PAGE;
      })
      .addCase(fetchMakes.fulfilled, (state, action) => {
        state.makes = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAdvertsByMake.fulfilled, (state, action) => {
        state.adverts = action.payload;
        state.isLoading = false;
      });
  },
});

export const advertsReducer = advertSlice.reducer;
export const { setPageValue, setCatalogList } = advertSlice.actions;
