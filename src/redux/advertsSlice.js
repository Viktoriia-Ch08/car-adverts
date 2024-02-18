import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchAdvertsWithLimit,
  fetchMakes,
  filterCars,
  fetchAllAdverts,
} from './operations';
import { LIMIT_PER_PAGE } from '../config/config';

const advertSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    makes: [],
    prices: [],
    page: 1,
    isLoading: false,
    error: null,
    isLastPage: false,
  },
  reducers: {
    setPageValue(state, action) {
      state.page = action.payload;
    },
    refreshAdverts(state) {
      state.adverts = [];
      state.isLoading = false;
      state.page = 1;
      state.prices = [];
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchAdvertsWithLimit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = [...state.adverts, ...action.payload];
        state.isLastPage = action.payload.length < LIMIT_PER_PAGE;
      })
      .addCase(fetchMakes.fulfilled, (state, action) => {
        state.makes = action.payload;
        state.isLoading = false;
      })
      .addCase(filterCars.fulfilled, (state, action) => {
        state.adverts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllAdverts.fulfilled, (state, action) => {
        state.prices = action.payload
          .map(({ rentalPrice }) => {
            return rentalPrice.split('$')[1];
          })
          .filter((value, index, array) => array.indexOf(value) === index)
          .sort(function (a, b) {
            return a - b;
          });
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchAdvertsWithLimit.pending,
          fetchMakes.pending,
          filterCars.pending,
          fetchAllAdverts.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAdvertsWithLimit.rejected,
          fetchMakes.rejected,
          filterCars.rejected,
          fetchAllAdverts.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const advertsReducer = advertSlice.reducer;
export const { setPageValue, refreshAdverts } = advertSlice.actions;
