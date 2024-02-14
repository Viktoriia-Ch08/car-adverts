import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://653a2108e3b530c8d9e934a5.mockapi.io';

export const fetchAllAdverts = createAsyncThunk(
  'adverts/fetchAllAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
