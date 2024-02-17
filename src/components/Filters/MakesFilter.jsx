import { useSelector } from 'react-redux';
import { selectMakes } from '../../redux/selectors';
import Select from 'react-select';

const MakesFilter = ({ setChosenMake, chosenMake, style }) => {
  const makes = useSelector(selectMakes);
  const options = [
    ...makes.map(make => {
      return { value: make, label: make };
    }),
  ];
  return (
    <Select
      value={chosenMake}
      onChange={setChosenMake}
      options={options}
      styles={style}
      className="filter-select"
    />
  );
};

export default MakesFilter;
