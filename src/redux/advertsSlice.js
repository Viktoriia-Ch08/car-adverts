import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAdverts, fetchMakes } from './operations';
import { LIMIT_PER_PAGE } from '../config/config';

const advertSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    makes: [],
    priceFilter: null,
    makeFilter: null,
    page: 1,
    isLoading: false,
    error: null,
    isLastPage: false,
  },
  reducers: {
    setPageValue(state, action) {
      state.page = action.payload;
    },
    resetFilters(state) {
      state.priceFilter = null;
      state.makeFilter = null;
      state.page = 1;
    },
    setPriceFilterValue(state, action) {
      state.adverts = [];
      state.priceFilter = action.payload;
      state.page = 1;
    },
    setMakeFilterValue(state, action) {
      state.adverts = [];
      state.makeFilter = action.payload;
      state.page = 1;
    },
    refreshAdverts(state) {
      state.adverts = [];
      state.isLoading = false;
      state.page = 1;
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

      .addMatcher(isAnyOf(fetchAdverts.pending, fetchMakes.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(fetchAdverts.rejected, fetchMakes.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const advertsReducer = advertSlice.reducer;
export const {
  setPageValue,
  refreshAdverts,
  setMakeFilterValue,
  resetFilters,
  setPriceFilterValue,
} = advertSlice.actions;
