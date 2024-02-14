import { useDispatch } from 'react-redux';
import { fetchAllAdverts } from '../../redux/operations';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import CatalogList from '../../components/CatalogList/CatalogList';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllAdverts(page));
  }, [dispatch, page]);

  return (
    <div>
      <CatalogList />
    </div>
  );
};

export default Catalog;
