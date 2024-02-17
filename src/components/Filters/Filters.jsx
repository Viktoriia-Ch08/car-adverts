import { filterCars } from '../../redux/operations';
import { FilterButton, FiltersThumb, FiltersWrap } from './Filters.styled';
import MakesFilter from './MakesFilter';
import PriceFilter from './PriceFilter';
import { useDispatch } from 'react-redux';

const Filters = ({
  setChosenMake,
  chosenMake,
  selectedOption,
  setSelectedOption,
}) => {
  const dispatch = useDispatch();

  const resetFilters = () => {
    dispatch(
      filterCars({
        rentalPrice: '',
        make: '',
      })
    );
    setSelectedOption('');
    setChosenMake('');
  };

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
        <MakesFilter
          setChosenMake={setChosenMake}
          chosenMake={chosenMake}
          style={style}
        />
        <PriceFilter
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          style={style}
        />
      </FiltersWrap>
      <FilterButton type="button" onClick={resetFilters}>
        Reset
      </FilterButton>
    </FiltersThumb>
  );
};

export default Filters;
