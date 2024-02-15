import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import CatalogListItem from './CatalogListItem/CatalogListItem';
import { nanoid } from 'nanoid';
import { CatalogCards } from './CatalogList.styled';
import { useEffect } from 'react';
import { fetchAdvertsByMake } from '../../redux/operations';

const CatalogList = ({ chosenMake }) => {
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (chosenMake === '') return;
    dispatch(fetchAdvertsByMake(chosenMake));
  }, [dispatch, chosenMake]);

  return (
    <CatalogCards>
      {adverts.map(advert => {
        return (
          <CatalogListItem advert={advert} key={`${advert.id}${nanoid()}`} />
        );
      })}
    </CatalogCards>
  );
};

export default CatalogList;
