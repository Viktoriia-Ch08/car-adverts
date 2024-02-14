import { createSelector } from '@reduxjs/toolkit';

const selectCars = state => state.cars;

export const selectAdverts = createSelector(selectCars, cars => cars.adverts);
