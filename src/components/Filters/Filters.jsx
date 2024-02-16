import MakesFilter from './MakesFilter';
import MileageFilter from './MileageFilter';
import PriceFilter from './PriceFilter';

const Filters = ({
  setChosenMake,
  chosenMake,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div>
      <MakesFilter setChosenMake={setChosenMake} chosenMake={chosenMake} />
      <PriceFilter
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <MileageFilter />
    </div>
  );
};

export default Filters;
