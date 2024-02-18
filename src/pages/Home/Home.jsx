import { HomeContainer, HomeText, MainTitle, TextWrap } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <TextWrap>
        <MainTitle>Welcome to RentalCar website!</MainTitle>
        <div>
          <HomeText>
            RentalCar is a car rental company that allows you to rent a car
            quickly and cheaply. We offer short-term and long-term car rental.
            All cars have compulsory civil liability insurance and an additional
            comprehensive insurance package. In addition, all vehicles are
            properly prepared for the trip - they have all the necessary fluids
            and a full tank of fuel.
          </HomeText>
          <HomeText>
            Our clients can choose cars with gasoline and diesel engines, with
            manual or automatic transmission, so that everyone can choose a
            vehicle according to their skills.
          </HomeText>
        </div>
      </TextWrap>
    </HomeContainer>
  );
};

export default Home;
