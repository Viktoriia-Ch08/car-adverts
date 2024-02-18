import { Oval } from "react-loader-spinner";

const Loader = ({ isLoading }) => {
  return (
    <Oval
      wrapperClass="loader"
      visible={isLoading}
      color="var(--text-special-clr)"
      secondaryColor="var(--text-clr-black)"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;
