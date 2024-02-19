import { nanoid } from 'nanoid';
import defaultImage from '../../../assets/images/defaultImg.png';
import { useState } from 'react';
import {
  ModalBodyThumb,
  ModalImg,
  ModalImgThumb,
  ModalInfoThumb,
  ModalTitle,
  Model,
  ModalTextThumb,
  ModalDescr,
  SecondTitleModal,
  AccessoriesFuncList,
  AccessoriesFuncItem,
  ConditionsThumb,
  ConditionsText,
  ModalLinkRent,
  LinkThumb,
} from './CarCardModal.styled';

const CarCardModal = ({ advert, address }) => {
  const [imgUrl, setImgUrl] = useState(advert.img);
  const fixMileage = advert.mileage.toString().split('');
  fixMileage.splice(1, 0, ',');

  const mileageToShow = fixMileage.join('');
  const {
    id,
    year,
    make,
    model,
    type,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalConditions,
  } = advert;

  const conditions = rentalConditions.split(/\r?\n/);

  return (
    <ModalBodyThumb>
      <ModalImgThumb>
        <ModalImg
          src={imgUrl}
          onError={() => {
            setImgUrl(defaultImage);
          }}
          alt={`${make} ${model}`}
          width={'250px'}
          height={'200px'}
        />
      </ModalImgThumb>
      <ModalInfoThumb>
        <ModalTitle>
          {make} <Model>{model}</Model> {year}
        </ModalTitle>
        <ModalTextThumb>{`${address} | Id: ${id} | Year: ${year} | Type: ${type} | Fuel Consumption: ${fuelConsumption} | Engine Size: ${engineSize}`}</ModalTextThumb>
        <ModalDescr>{description}</ModalDescr>
        <SecondTitleModal>Accessories and functionalities:</SecondTitleModal>
        <AccessoriesFuncList>
          {accessories.map(element => {
            return (
              <AccessoriesFuncItem key={nanoid()}>
                {element}
              </AccessoriesFuncItem>
            );
          })}
          {functionalities.map(element => {
            return (
              <AccessoriesFuncItem key={nanoid()}>
                {element}
              </AccessoriesFuncItem>
            );
          })}
        </AccessoriesFuncList>
        <SecondTitleModal>Rental Conditions: </SecondTitleModal>
        <ConditionsThumb>
          {conditions.map(condition => {
            return <ConditionsText key={nanoid()}>{condition}</ConditionsText>;
          })}
          <ConditionsText>Mileage: {mileageToShow}</ConditionsText>
          <ConditionsText>Price: {rentalPrice}</ConditionsText>
        </ConditionsThumb>
        <LinkThumb>
          <ModalLinkRent href="tel:+380730000000">Rent Car</ModalLinkRent>
        </LinkThumb>
      </ModalInfoThumb>
    </ModalBodyThumb>
  );
};

export default CarCardModal;
