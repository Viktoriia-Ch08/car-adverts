import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdvertsWithLimit,
  fetchMakes,
  fetchAllAdverts,
  filterCars,
} from '../../redux/operations';
import { useEffect, useState } from 'react';

import CatalogList from '../../components/CatalogList/CatalogList';
import { refreshAdverts, setPageValue } from '../../redux/advertsSlice';
import {
  selectAdverts,
  selectIsLastPage,
  selectIsLoading,
  selectPage,
} from '../../redux/selectors';
import {
  CatalogContainer,
  CatalogLoadMoreBtn,
  CatalogLoadMoreBtnIcon,
} from './Catalog.styled';
import Filters from '../../components/Filters/Filters';
import icons from '../../assets/images/sprite.svg';
import { Oval } from 'react-loader-spinner';

const Catalog = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const [chosenMake, setChosenMake] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [favorite, setFavorite] = useState([]);
  const isLoading = useSelector(selectIsLoading);

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
    const items = JSON.parse(localStorage.getItem('favorite'));
    if (items) {
      setFavorite(items);
    }
  }, []);

  return (
    <>
      <CatalogContainer>
        {adverts.length && (
          <>
            <Filters
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              setChosenMake={setChosenMake}
              chosenMake={chosenMake}
            />
            <CatalogList
              data={adverts}
              favorite={favorite}
              setFavorite={setFavorite}
            />
            <CatalogLoadMoreBtn
              disabled={isLastPage}
              onClick={() => {
                dispatch(setPageValue(page + 1));
              }}
            >
              Load More
              <CatalogLoadMoreBtnIcon>
                <use href={`${icons}#icon-upload`}></use>
              </CatalogLoadMoreBtnIcon>
            </CatalogLoadMoreBtn>
          </>
        )}
      </CatalogContainer>

      <Oval
        className="loader"
        visible={isLoading}
        width="300"
        color="var(--text-special-clr)"
        ariaLabel="infinity-spin-loading"
      />
    </>
  );
};

export default Catalog;
