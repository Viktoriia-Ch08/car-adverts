import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import CatalogListItem from './CatalogListItem/CatalogListItem';
import { nanoid } from 'nanoid';
import { CatalogCards } from './CatalogList.styled';

const CatalogList = () => {
  const adverts = useSelector(selectAdverts);

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
