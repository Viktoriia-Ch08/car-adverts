import { useEffect, useState } from 'react';
import CatalogList from '../../components/CatalogList/CatalogList';

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favorite'));
    if (items) {
      setFavorite(items);
    }
  }, []);

  return (
    <div>
      <CatalogList
        favorite={favorite}
        setFavorite={setFavorite}
        data={favorite}
      />
    </div>
  );
};

export default Favorites;
