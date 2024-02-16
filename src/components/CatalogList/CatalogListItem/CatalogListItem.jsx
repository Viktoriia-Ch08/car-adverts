import { useState } from 'react';
import CarCardModal from '../../Modal/CarCardModal/CarCardModal';
import UniversalModal from '../../Modal/UniversalModal';
import defaultImage from '../../../assets/images/defaultImg.png';
import { Card, LoveBtn } from './CatalogListItem.styled';
import { saveToLocalStorage } from '../../../services/localStorage';

const CatalogListItem = ({ advert, favorite, setFavorite }) => {
  const [show, setShow] = useState(false);
  const [imgUrl, setImgUrl] = useState(advert.img);

  const address = advert.address.split(' ').slice(-2).join(' ');

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const isFavorite = favorite.some(localCar => localCar.id === advert.id);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFromLocalStorage();
    } else {
      setFavorite(prev => [...prev, advert]);
      saveToLocalStorage(advert);
    }
  };

  const removeFromLocalStorage = () => {
    const vehicles = favorite.filter(car => car.id !== advert.id);
    setFavorite(vehicles);
    localStorage.setItem('favorite', JSON.stringify(vehicles));
  };

  return (
    <>
      <Card>
        <LoveBtn
          onClick={handleFavorite}
          className={isFavorite ? 'favorite' : ''}
        >
          Love
        </LoveBtn>
        <img
          src={imgUrl}
          onError={() => {
            setImgUrl(defaultImage);
          }}
          alt={advert.make}
          width={'100px'}
          height={'100px'}
        />
        <div>
          <div>
            <p>
              {advert.make} {advert.model} {advert.year}
            </p>
          </div>
          <p>{advert.rentalPrice}</p>
        </div>
        <div>
          <p>
            {`${address} | ${advert.rentalCompany} | ${advert.type} | ${advert.model} | ${advert.mileage} | ${advert.functionalities[0]}`}
          </p>
        </div>
        <button onClick={handleShow}>Learn More</button>
      </Card>
      {show && (
        <UniversalModal show={show} handleClose={handleClose}>
          <CarCardModal advert={advert} address={address} />
        </UniversalModal>
      )}
    </>
  );
};

export default CatalogListItem;
