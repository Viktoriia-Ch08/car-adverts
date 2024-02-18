import { useDispatch, useSelector } from 'react-redux';
import { selectMakeFilter, selectMakes } from '../../redux/selectors';
import Select from 'react-select';
import { setMakeFilterValue } from '../../redux/advertsSlice';

const MakesFilter = ({ style }) => {
  const dispatch = useDispatch();

  const makes = useSelector(selectMakes);
  const makeFilter = useSelector(selectMakeFilter);
  const options = [
    ...makes.map(make => {
      return { value: make, label: make };
    }),
  ];
  return (
    <Select
      value={makeFilter}
      onChange={e => {
        dispatch(setMakeFilterValue(e));
      }}
      options={options}
      styles={style}
      className="filter-select"
    />
  );
};

export default MakesFilter;
