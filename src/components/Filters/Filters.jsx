import { resetFilters } from '../../redux/advertsSlice';
import { selectMakeFilter, selectPriceFilter } from '../../redux/selectors';
import {
  FilterButton,
  FiltersBtnWrap,
  FiltersThumb,
  FiltersWrap,
} from './Filters.styled';
import MakesFilter from './MakesFilter';
import PriceFilter from './PriceFilter';
import { useDispatch, useSelector } from 'react-redux';

const Filters = () => {
  const dispatch = useDispatch();
  const makeFilter = useSelector(selectMakeFilter);
  const priceFilter = useSelector(selectPriceFilter);

  const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: 'none',
      cursor: 'pointer',
    }),
  };

  return (
    <FiltersThumb>
      <FiltersWrap>
        <MakesFilter style={style} />
        <PriceFilter style={style} />
      </FiltersWrap>
      <FiltersBtnWrap>
        <FilterButton
          type="button"
          onClick={() => dispatch(resetFilters())}
          disabled={priceFilter === null && makeFilter === null}
        >
          Reset
        </FilterButton>
      </FiltersBtnWrap>
    </FiltersThumb>
  );
};

export default Filters;
