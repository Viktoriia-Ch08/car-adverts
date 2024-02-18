import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { selectPriceFilter } from '../../redux/selectors';
import { setPriceFilterValue } from '../../redux/advertsSlice';
import { AVAILABLE_PRICES } from '../../config/config';

const PriceFilter = ({ style }) => {
  const priceFilter = useSelector(selectPriceFilter);
  const dispatch = useDispatch();

  const options = [
    ...AVAILABLE_PRICES.map(price => {
      return { value: price, label: `$${price}` };
    }),
  ];

  return (
    <Select
      value={priceFilter}
      onChange={e => dispatch(setPriceFilterValue(e))}
      options={options}
      className="filter-select"
      styles={style}
    />
  );
};

export default PriceFilter;
