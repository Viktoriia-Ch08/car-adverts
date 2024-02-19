import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, fetchMakes } from '../../redux/operations';
import { useEffect, useState } from 'react';

import CatalogList from '../../components/CatalogList/CatalogList';
import Loader from '../../components/Loader/Loader';
import { resetFilters, setPageValue } from '../../redux/advertsSlice';
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
import { failedNotification } from '../../services/notification';

const Catalog = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const [favorite, setFavorite] = useState([]);
  const adverts = useSelector(selectAdverts);
  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoading);
  const makeFilter = useSelector(selectMakeFilter);
  const priceFilter = useSelector(selectPriceFilter);

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchAdverts({
        page,
        rentalPrice: priceFilter?.value,
        make: makeFilter?.value,
      })
    )
      .unwrap()
      .catch(() => {
        failedNotification("Sorry, we didn't find cars :( Try again!");
        dispatch(resetFilters());
      });
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
            <Filters />
            <CatalogList
              data={adverts}
              favorite={favorite}
              setFavorite={setFavorite}
            />
            {!isLastPage && (
              <CatalogLoadMoreBtn
                onClick={() => {
                  dispatch(setPageValue(page + 1));
                }}
              >
                Load More
                <CatalogLoadMoreBtnIcon>
                  <use href={`${icons}#icon-upload`}></use>
                </CatalogLoadMoreBtnIcon>
              </CatalogLoadMoreBtn>
            )}
          </>
        )}
      </CatalogContainer>
      <Loader isLoading={isLoading} />
    </>
  );
};

export default Catalog;
