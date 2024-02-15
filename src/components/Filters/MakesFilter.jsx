import { useDispatch, useSelector } from 'react-redux';
import { fetchMakes } from '../../redux/operations';
import { selectMakes } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

const MakesFilter = ({ setChosenMake }) => {
  const dispatch = useDispatch();
  const makes = useSelector(selectMakes);

  useEffect(() => {
    dispatch(fetchMakes());
  }, [dispatch]);

  return (
    <section>
      <div>
        <select
          defaultValue={'DEFAULT'}
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
    </section>
  );
};

export default MakesFilter;
