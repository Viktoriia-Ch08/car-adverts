import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { Link, NavBar, NavBarThumb, Section } from "./Layout.styled";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/selectors";

const Layout = () => {
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <header>
        <NavBarThumb className="main-container">
          <NavBar>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/catalog"
              className={location.pathname === "/catalog" ? "active" : ""}
            >
              Catalog
            </Link>
            <Link
              to="/favorites"
              className={location.pathname === "/favorites" ? "active" : ""}
            >
              Favorites
            </Link>
          </NavBar>
        </NavBarThumb>
      </header>
      <main>
        <Section className="main-container">
          <Suspense>
            <Outlet />
          </Suspense>
        </Section>
      </main>
    </>
  );
};

export default Layout;
