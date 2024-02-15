import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/operations';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import CatalogList from '../../components/CatalogList/CatalogList';
import { setPageValue } from '../../redux/advertsSlice';
import { selectAdverts, selectPage } from '../../redux/selectors';
import { CatalogContainer } from './Catalog.styled';
import MakesFilter from '../../components/Filters/MakesFilter';

const Catalog = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const adverts = useSelector(selectAdverts);
  const [chosenMake, setChosenMake] = useState('');
  console.log(adverts);

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  return (
    <CatalogContainer>
      <MakesFilter setChosenMake={setChosenMake} />
      <CatalogList chosenMake={chosenMake} />
      <button
        onClick={() => {
          dispatch(setPageValue(page + 1));
        }}
      >
        555
      </button>
    </CatalogContainer>
  );
};

export default Catalog;
