import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LIMIT_PER_PAGE } from '../config/config';

axios.defaults.baseURL = 'https://653a2108e3b530c8d9e934a5.mockapi.io';

export const fetchAdvertsWithLimit = createAsyncThunk(
  'adverts/fetchAdverts',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(
        `/adverts?limit=${LIMIT_PER_PAGE}&page=${page}`
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

export const fetchCarByPrice = createAsyncThunk(
  'adverts/fetchCarByPrice',
  async (price, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?search=${price}`);
      return response.data.filter(
        element => element.rentalPrice === `$${price}`
      );
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAdvertsByMake = createAsyncThunk(
  'adverts/fetchAdvertsByMake',
  async (title, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?search=${title}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAllAdverts = createAsyncThunk(
  'adverts/filterAdvertsByPrice',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);