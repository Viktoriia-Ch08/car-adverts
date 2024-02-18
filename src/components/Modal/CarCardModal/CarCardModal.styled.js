import styled from 'styled-components';
import { device } from '../../../css/deviceSizes';

export const ModalBodyThumb = styled.div`
  padding-top: 45px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;

  @media ${device.tablet} {
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
  }
`;

export const ModalImgThumb = styled.div`
  overflow: hidden;
`;

export const ModalImg = styled.img`
  border-radius: 12px;
  margin-bottom: 10px;
  @media ${device.tablet} {
    margin-bottom: 20px;
  }
`;

export const ModalInfoThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${device.tablet} {
    gap: 20px;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: var(--font-weight-bold);

  @media ${device.tablet} {
    font-size: 18px;
    width: 180px;
  }
`;

export const Model = styled.span`
  color: var(--text-special-clr);
  text-shadow: 0 0 1px var(--text-clr-black);
`;

export const ModalTextThumb = styled.p`
  font-size: 12px;
  color: var(--text-clr-second-light-grey);
`;

export const ModalDescr = styled.p`
  font-size: 14px;
  text-align: justify;
  font-weight: var(--font-weight-medium);
`;

export const SecondTitleModal = styled.h3`
  font-weight: var(--font-weight-bold);
`;

export const AccessoriesFuncList = styled.ul`
  padding-left: 25px;

  font-size: 12px;
  list-style: circle;
`;

export const AccessoriesFuncItem = styled.li`
  list-style: inherit;
`;

export const ConditionsThumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ConditionsText = styled.p`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100px;
  height: 35px;
  font-size: 10px;
  text-align: center;
  border: 1px solid var(--text-clr-black);
  border-radius: 12px;
  color: var(--text-special-clr);
  background-color: var(--text-clr-black);
`;

export const ModalLinkRent = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: var(--font-weight-bold);
  color: var(--text-clr-black);
  background-color: var(--text-special-clr);
  border: 1px solid var(--text-clr-black);

  &:active {
    background-color: var(--btn-yellow-hover-focus);
  }

  @media ${device.tablet} {
    width: 300px;
    height: 50px;

    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-yellow-hover-focus);
    }
  }
`;

export const LinkThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
