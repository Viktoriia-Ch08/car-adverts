import { useEffect, useState } from 'react';
import CatalogList from '../../components/CatalogList/CatalogList';
import { FavoritesThumb } from './Favorites.styled';

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favorite'));
    if (items) {
      setFavorite(items);
    }
  }, []);

  return (
    <FavoritesThumb>
      <CatalogList
        favorite={favorite}
        setFavorite={setFavorite}
        data={favorite}
      />
    </FavoritesThumb>
  );
};

export default Favorites;
