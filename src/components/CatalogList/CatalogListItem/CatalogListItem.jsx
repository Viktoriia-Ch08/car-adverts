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
  LoveBtnIcon,
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
            <LoveBtnIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="none"
              className={isFavorite ? 'favorite-icon' : 'heart'}
            >
              <path
                d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"
              />
            </LoveBtnIcon>
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
