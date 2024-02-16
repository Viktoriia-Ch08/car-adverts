import { useSelector } from 'react-redux';
import Select from 'react-select';
import { selectPrices } from '../../redux/selectors';

const PriceFilter = ({ selectedOption, setSelectedOption }) => {
  const prices = useSelector(selectPrices);
  const options = [
    ...prices.map(price => {
      return { value: price, label: `$${price}` };
    }),
  ];

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};

export default PriceFilter;
