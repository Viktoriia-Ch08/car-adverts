import { useSelector } from 'react-redux';
import { selectMakes } from '../../redux/selectors';
import { nanoid } from 'nanoid';

const MakesFilter = ({ setChosenMake, chosenMake }) => {
  const makes = useSelector(selectMakes);
  return (
    <div>
      <select
        value={chosenMake ? chosenMake : 'DEFAULT'}
        name="makes"
        onChange={event => setChosenMake(event.target.value)}
      >
        <option disabled value={'DEFAULT'}>
          Choose car make
        </option>
        {makes.map(make => {
          return (
            <option value={make} key={nanoid()}>
              {make}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MakesFilter;
