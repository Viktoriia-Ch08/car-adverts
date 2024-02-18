import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, NavBar, NavBarThumb, Section } from './Layout.styled';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <header>
        <NavBarThumb className="main-container">
          <NavBar>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link
              to="/catalog"
              className={location.pathname === '/catalog' ? 'active' : ''}
            >
              Catalog
            </Link>
            <Link
              to="/favorites"
              className={location.pathname === '/favorites' ? 'active' : ''}
            >
              Favorites
            </Link>
          </NavBar>
        </NavBarThumb>
      </header>
      <main>
        <Section className="main-container">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Section>
      </main>
    </>
  );
};

export default Layout;
