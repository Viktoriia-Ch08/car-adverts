export const saveToLocalStorage = vehicle => {
  const localData = localStorage.getItem('favorite');
  let vehicles = localData ? JSON.parse(localData) : [];

  const index = vehicles.findIndex(car => car.id === vehicle.id);

  if (index === -1) {
    vehicles.push(vehicle);
    localStorage.setItem('favorite', JSON.stringify(vehicles));
  }
};
