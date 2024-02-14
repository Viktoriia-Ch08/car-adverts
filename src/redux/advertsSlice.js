import { createSlice } from '@reduxjs/toolkit';
import { fetchAllAdverts } from './operations';

const advertSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    // setFilterValue(state, action) {
    //   state.filter = action.payload;
    // },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.adverts = action.payload;
    });
  },
});

export const advertsReducer = advertSlice.reducer;
