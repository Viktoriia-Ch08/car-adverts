import { createAsyncThunk } from '@reduxjs/toolkit';
import { LIMIT_PER_PAGE } from '../config/config';
import axios from 'axios';

axios.defaults.baseURL = 'https://653a2108e3b530c8d9e934a5.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `/adverts?limit=${LIMIT_PER_PAGE}&page=${data.page}${
          data.rentalPrice ? `&rentalPrice=${data.rentalPrice}` : ''
        }${data.make ? `&make=${data.make}` : ''}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMakes = createAsyncThunk(
  'makes/fetchMakes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/makes');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
