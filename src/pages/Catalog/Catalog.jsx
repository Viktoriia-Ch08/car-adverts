import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, fetchMakes } from '../../redux/operations';
import { useEffect, useState } from 'react';

import CatalogList from '../../components/CatalogList/CatalogList';
import Loader from '../../components/Loader/Loader';
import { refreshAdverts, setPageValue } from '../../redux/advertsSlice';
import {
  selectAdverts,
  selectIsLastPage,
  selectIsLoading,
  selectMakeFilter,
  selectPage,
  selectPriceFilter,
} from '../../redux/selectors';
import {
  CatalogContainer,
  CatalogLoadMoreBtn,
  CatalogLoadMoreBtnIcon,
} from './Catalog.styled';
import Filters from '../../components/Filters/Filters';
import icons from '../../assets/images/sprite.svg';

const Catalog = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const [chosenMake, setChosenMake] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [favorite, setFavorite] = useState([]);

  const adverts = useSelector(selectAdverts);
  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoading);
  const makeFilter = useSelector(selectMakeFilter);
  const priceFilter = useSelector(selectPriceFilter);

  useEffect(() => {
    dispatch(refreshAdverts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchAdverts({
        page,
        rentalPrice: priceFilter?.value,
        make: makeFilter?.value,
      })
    );
  }, [dispatch, page, makeFilter, priceFilter]);

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
        {adverts.length > 0 && (
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
      <Loader isLoading={isLoading} />
    </>
  );
};

export default Catalog;
