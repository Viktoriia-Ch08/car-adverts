import { useState } from 'react';
import CarCardModal from '../../Modal/CarCardModal/CarCardModal';
import UniversalModal from '../../Modal/UniversalModal';
import defaultImage from '../../../assets/images/defaultImg.png';
import {
  Card,
  CardImage,
  ImgThumb,
  InfoCardWrap,
  InfoText,
  LearnMoreBtn,
  LoveBtn,
  Model,
  Price,
  Title,
  TitleInfoWrap,
} from './CatalogListItem.styled';
import { saveToLocalStorage } from '../../../services/localStorage';
import { addScrollLock } from '../../../services/bodyScroll';

const CatalogListItem = ({ advert, favorite, setFavorite }) => {
  const [show, setShow] = useState(false);
  const [imgUrl, setImgUrl] = useState(advert.img);

  const address = advert.address.split(' ').slice(-2).join(' ');

  const isFavorite = favorite.some(localCar => localCar.id === advert.id);

  const fixMileage = advert.mileage.toString().split('');
  fixMileage.splice(1, 0, ',');

  const mileageToShow = fixMileage.join('');

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
        <ImgThumb>
          <LoveBtn
            onClick={handleFavorite}
            className={isFavorite ? 'favorite' : ''}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className={isFavorite ? 'favorite-icon' : 'heart'}
            >
              <path d="M4.03553 1C1.80677 1 0 2.80677 0 5.03553C0 6.10582 0.42517 7.13228 1.18198 7.88909L7.14645 13.8536C7.34171 14.0488 7.65829 14.0488 7.85355 13.8536L13.818 7.88909C14.5748 7.13228 15 6.10582 15 5.03553C15 2.80677 13.1932 1 10.9645 1C9.89418 1 8.86772 1.42517 8.11091 2.18198L7.5 2.79289L6.88909 2.18198C6.13228 1.42517 5.10582 1 4.03553 1Z" />
            </svg>
          </LoveBtn>
          <CardImage
            src={imgUrl}
            onError={() => {
              setImgUrl(defaultImage);
            }}
            alt={advert.make}
          />
        </ImgThumb>
        <InfoCardWrap>
          <TitleInfoWrap>
            <Title>
              {advert.make} <Model>{advert.model}</Model> {advert.year}
            </Title>
            <Price>{advert.rentalPrice}</Price>
          </TitleInfoWrap>

          <InfoText>
            {`${address} | ${advert.rentalCompany} | ${advert.type} | ${advert.model} | ${mileageToShow} | ${advert.functionalities[0]}`}
          </InfoText>
        </InfoCardWrap>

        <LearnMoreBtn
          onClick={() => {
            setShow(true);
            addScrollLock();
          }}
        >
          Learn More
        </LearnMoreBtn>
      </Card>
      {show && (
        <UniversalModal setShow={setShow}>
          <CarCardModal advert={advert} address={address} />
        </UniversalModal>
      )}
    </>
  );
};

export default CatalogListItem;
