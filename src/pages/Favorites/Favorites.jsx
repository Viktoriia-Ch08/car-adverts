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
    <section className="main-container">
      <CatalogList
        favorite={favorite}
        setFavorite={setFavorite}
        data={favorite}
      />
    </section>
  );
};

export default Favorites;
