import { nanoid } from 'nanoid';

const CarCardModal = ({ advert, address }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalConditions,
    mileage,
  } = advert;

  const conditions = rentalConditions.split(/\r?\n/);

  return (
    <>
      <div>
        <img src={img} alt={`${make} ${model}`} />
      </div>
      <h2>
        {make} <span>{model}</span> {year}
      </h2>
      <div>
        <p>{address}</p>
        <p>Id:{id}</p>
        <p>Year: {year}</p>
        <p>Type: {type}</p>
        <p>Fuel Consumption: {fuelConsumption}</p>
        <p>Engine Size: {engineSize}</p>
        <p>{description}</p>
        <div>
          <h3>Accessories and functionalities:</h3>
          <div>
            {accessories.map(element => {
              return <p key={nanoid()}>{element}</p>;
            })}
            {functionalities.map(element => {
              return <p key={nanoid()}>{element}</p>;
            })}
          </div>
        </div>
        <div>
          <h3>Rental Conditions: </h3>
          {conditions.map(condition => {
            return <p key={nanoid()}>{condition}</p>;
          })}
          <p>Mileage: {mileage}</p>
          <p>Price: {rentalPrice}</p>
        </div>
        <button>Rent Car</button>
      </div>
    </>
  );
};

export default CarCardModal;
