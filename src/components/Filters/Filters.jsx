import { filterCars } from '../../redux/operations';
import { failedNotification } from '../../services/notification';
import {
  FilterButton,
  FiltersBtnWrap,
  FiltersThumb,
  FiltersWrap,
} from './Filters.styled';
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

  const handleFilters = () => {
    const price = selectedOption ? selectedOption.value : '';
    const make = chosenMake ? chosenMake.value : '';
    dispatch(
      filterCars({
        rentalPrice: price,
        make: make,
      })
    )
      .unwrap()
      .catch(() => {
        failedNotification('Sorry, we didn`t find any cars');
      });
  };

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
      <FiltersBtnWrap>
        <FilterButton
          type="button"
          onClick={handleFilters}
          disabled={!chosenMake && !selectedOption}
        >
          Search
        </FilterButton>
        <FilterButton type="button" onClick={resetFilters}>
          Reset
        </FilterButton>
      </FiltersBtnWrap>
    </FiltersThumb>
  );
};

export default Filters;
