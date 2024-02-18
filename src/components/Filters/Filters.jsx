import { resetFilters } from '../../redux/advertsSlice';
import {
  FilterButton,
  FiltersBtnWrap,
  FiltersThumb,
  FiltersWrap,
} from './Filters.styled';
import MakesFilter from './MakesFilter';
import PriceFilter from './PriceFilter';
import { useDispatch } from 'react-redux';

const Filters = () => {
  const dispatch = useDispatch();

  const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: 'none',
    }),
  };

  return (
    <FiltersThumb>
      <FiltersWrap>
        <MakesFilter style={style} />
        <PriceFilter style={style} />
      </FiltersWrap>
      <FiltersBtnWrap>
        <FilterButton type="button">Search</FilterButton>
        <FilterButton type="button" onClick={() => dispatch(resetFilters())}>
          Reset
        </FilterButton>
      </FiltersBtnWrap>
    </FiltersThumb>
  );
};

export default Filters;
