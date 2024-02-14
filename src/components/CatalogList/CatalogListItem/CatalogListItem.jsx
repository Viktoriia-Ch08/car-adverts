import { useState } from 'react';
import CarCardModal from '../../Modal/CarCardModal/CarCardModal';
import UniversalModal from '../../Modal/UniversalModal';

const CatalogListItem = ({ advert }) => {
  const [show, setShow] = useState(false);
  const address = advert.address.split(' ').slice(-2).join(' ');

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <li>
        <img
          src={advert.img}
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
      </li>
      {show && (
        <UniversalModal show={show} handleClose={handleClose}>
          <CarCardModal advert={advert} address={address} />
        </UniversalModal>
      )}
    </>
  );
};

export default CatalogListItem;
