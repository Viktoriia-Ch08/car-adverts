import { useEffect, useState } from 'react';
import CatalogList from '../../components/CatalogList/CatalogList';
import { FavoritesThumb } from './Favorites.styled';
import { useDispatch } from 'react-redux';
import { refreshAdverts } from '../../redux/advertsSlice';

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshAdverts());
  }, [dispatch]);

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
