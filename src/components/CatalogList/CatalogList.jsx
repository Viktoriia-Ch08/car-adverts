import CatalogListItem from './CatalogListItem/CatalogListItem';
import { nanoid } from 'nanoid';
import { CatalogCards } from './CatalogList.styled';

const CatalogList = ({ data, favorite, setFavorite }) => {
  return (
    <CatalogCards>
      {data.map(advert => {
        return (
          <CatalogListItem
            advert={advert}
            key={`${advert.id}${nanoid()}`}
            favorite={favorite}
            setFavorite={setFavorite}
          />
        );
      })}
    </CatalogCards>
  );
};

export default CatalogList;
