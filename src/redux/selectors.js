import { createSelector } from '@reduxjs/toolkit';

const selectCars = state => state.cars;

export const selectAdverts = createSelector(selectCars, cars => cars.adverts);
export const selectMakes = createSelector(selectCars, cars => cars.makes);
export const selectPage = createSelector(selectCars, cars => cars.page);
