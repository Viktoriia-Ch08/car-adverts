import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">home</Link>
          <Link to="/catalog">catalog</Link>
          <Link to="/favorites">favorites</Link>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
