import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, NavBar, NavBarThumb, Section } from './Layout.styled';
import { Oval } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';

const Layout = () => {
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);
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
          <Suspense
            fallback={
              <Oval
                className="loader"
                visible={isLoading}
                width="300"
                color="var(--text-special-clr)"
                ariaLabel="infinity-spin-loading"
              />
            }
          >
            <Outlet />
          </Suspense>
        </Section>
      </main>
    </>
  );
};

export default Layout;
