import { createSelector } from '@reduxjs/toolkit';

const selectCars = state => state.cars;

export const selectAdverts = createSelector(selectCars, cars => cars.adverts);
export const selectMakes = createSelector(selectCars, cars => cars.makes);
export const selectPage = createSelector(selectCars, cars => cars.page);
export const selectIsLastPage = createSelector(
  selectCars,
  cars => cars.isLastPage
);
export const selectIsLoading = createSelector(
  selectCars,
  cars => cars.isLoading
);

export const selectPriceFilter = createSelector(
  selectCars,
  cars => cars.priceFilter
);
export const selectMakeFilter = createSelector(
  selectCars,
  cars => cars.makeFilter
);
