import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdvertsWithLimit,
  fetchAdvertsByMake,
  fetchMakes,
  fetchAllAdverts,
  fetchCarByPrice,
} from '../../redux/operations';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import CatalogList from '../../components/CatalogList/CatalogList';
import { refreshAdverts, setPageValue } from '../../redux/advertsSlice';
import {
  selectAdverts,
  selectIsLastPage,
  selectPage,
} from '../../redux/selectors';
import { CatalogContainer } from './Catalog.styled';
import Filters from '../../components/Filters/Filters';

const Catalog = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const [chosenMake, setChosenMake] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const adverts = useSelector(selectAdverts);
  const isLastPage = useSelector(selectIsLastPage);

  useEffect(() => {
    dispatch(refreshAdverts());
  }, [dispatch]);

  useEffect(() => {
    setPageValue(1);
    dispatch(fetchAdvertsWithLimit(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMakes());
  }, [dispatch]);

  useEffect(() => {
    if (chosenMake === '') return;
    setSelectedOption(null);
    dispatch(fetchAdvertsByMake(chosenMake));
  }, [dispatch, chosenMake]);

  useEffect(() => {
    if (!selectedOption) return;
    setChosenMake('');
    dispatch(fetchCarByPrice(selectedOption.value));
  }, [dispatch, selectedOption]);

  return (
    <CatalogContainer>
      {adverts.length && (
        <>
          <Filters
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setChosenMake={setChosenMake}
            chosenMake={chosenMake}
          />
          <CatalogList />
          <button
            disabled={isLastPage}
            onClick={() => {
              dispatch(setPageValue(page + 1));
            }}
          >
            Load More
          </button>
        </>
      )}
    </CatalogContainer>
  );
};

export default Catalog;
