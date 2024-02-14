import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAdverts } from '../../redux/operations';
import { useEffect } from 'react';
import { selectAdverts } from '../../redux/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  return (
    <>
      <div>
        <p>home</p>
        <button>OK</button>
        <ul>
          {adverts.map(advert => {
            return (
              <li key={advert.id}>
                <img
                  src={advert.img}
                  alt={advert.make}
                  width={'100px'}
                  height={'100px'}
                />
                <div>
                  <div>
                    <p>{advert.make}</p>
                    <p>{advert.model}</p>
                    <p>{advert.year}</p>
                  </div>
                  <p>{advert.rentalPrice}</p>
                </div>
                <div>
                  <p>{advert.address}</p>
                  <p>{advert.rentalCompany}</p>
                  <p>{advert.type}</p>
                  <p>{advert.model}</p>
                  <p>{advert.mileage}</p>
                  <p>{advert.functionalities[0]}</p>
                </div>
                <button>Learn More</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
