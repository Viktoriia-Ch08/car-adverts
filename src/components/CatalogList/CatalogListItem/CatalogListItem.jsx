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
import icons from '../../../assets/images/sprite.svg';
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
            <LoveBtnIcon>
              <use href={`${icons}#icon-heart`}></use>
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
            <Price>${advert.rentalPrice}</Price>
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
