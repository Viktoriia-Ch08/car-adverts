import { useSelector } from 'react-redux';
import Select from 'react-select';
import { selectPrices } from '../../redux/selectors';

const PriceFilter = ({ selectedOption, setSelectedOption, style }) => {
  const prices = useSelector(selectPrices);
  const options = [
    ...prices.map(price => {
      return { value: price, label: `$${price}` };
    }),
  ];

  return (
    <Select
      value={selectedOption}
      onChange={setSelectedOption}
      options={options}
      className="filter-select"
      styles={style}
    />
  );
};

export default PriceFilter;
