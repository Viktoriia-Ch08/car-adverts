import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import CatalogListItem from './CatalogListItem/CatalogListItem';
import { nanoid } from 'nanoid';

const CatalogList = () => {
  const adverts = useSelector(selectAdverts);
  return (
    <ul>
      {adverts.map(advert => {
        return (
          <CatalogListItem advert={advert} key={`${advert.id}${nanoid()}`} />
        );
      })}
    </ul>
  );
};

export default CatalogList;
