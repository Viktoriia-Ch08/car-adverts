import styled from 'styled-components';
import { device } from '../../css/deviceSizes';
import background from '../../assets/images/bg.jpg';

export const HomeContainer = styled.div`
  background-image: linear-gradient(
      rgba(47, 46, 48, 0.5),
      rgba(47, 46, 48, 0.5)
    ),
    url(${background});
  background-size: cover;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    display: flex;
    height: 360px;
    width: 100%;
    background-image: linear-gradient(
        rgba(47, 46, 48, 0.5),
        rgba(47, 46, 48, 0.5)
      ),
      url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -58px;
  }
  @media ${device.desktop} {
    height: 600px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  padding: 15px;
  color: var(--home-page-text-clr);
  @media ${device.desktop} {
    gap: 30px;
  }
`;

export const MainTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: var(--font-weight-bold);
`;

export const HomeText = styled.p`
  text-align: justify;
  @media ${device.tablet} {
    font-size: 12px;
    width: 325px;
  }
  @media ${device.desktop} {
    width: 500px;
  }
`;
