import styled from 'styled-components';
import { device } from '../../../css/deviceSizes';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);

  @media ${device.tablet} {
    width: calc((100% - 40px) / 3);
    height: 325px;
  }

  @media ${device.desktop} {
    width: calc((100% - 60px) / 4);
    min-height: 325px;
  }
`;

export const ImgThumb = styled.div`
  position: relative;
  width: 100%;
`;

export const CardImage = styled.img`
  height: 150px;
  object-fit: cover;
`;

export const LoveBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  backdrop-filter: blur(1px);
  border: 1px solid var(--text-clr-black);
  border-radius: 8px;
`;

export const LoveBtnIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: var(--font-weight-bold);

  @media ${device.tablet} {
    font-size: 18px;
    width: 180px;
  }
`;

export const Price = styled.p`
  font-size: 20px;
  color: var(--text-special-clr);
  @media ${device.tablet} {
    font-size: 18px;
  }
`;

export const Model = styled.span`
  color: var(--text-special-clr);
`;

export const InfoCardWrap = styled.div`
  padding: 0 5px;
`;

export const TitleInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media ${device.tablet} {
    margin-bottom: 15px;
  }
`;

export const InfoText = styled.p`
  font-size: 12px;
  color: var(--text-grey-clr);
  @media ${device.tablet} {
    min-height: 45px;
  }
`;

export const LearnMoreBtn = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  color: var(--text-special-clr);
  background-color: var(--text-clr-black);
  border: 2px solid var(--text-clr-light-grey);

  &:active {
    background-color: var(--btn-dark-hover-focus);
  }

  @media ${device.tablet} {
    width: 100%;
    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-dark-hover-focus);
    }
  }
`;
