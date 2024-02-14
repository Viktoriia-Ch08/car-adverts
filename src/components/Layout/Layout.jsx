import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>
        <Link to="/">home</Link>
        <Link to="/catalog">catalog</Link>
        <Link to="/favorites">favorites</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
