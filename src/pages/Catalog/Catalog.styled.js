import styled from 'styled-components';
import { device } from '../../css/deviceSizes';

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const CatalogLoadMoreBtn = styled.button`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  color: var(--text-clr-black);
  background-color: var(--text-special-clr);
  &:active {
    background-color: var(--btn-yellow-hover-focus);
  }

  @media ${device.tablet} {
    height: 55px;
    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-yellow-hover-focus);
    }
  }
`;

export const CatalogLoadMoreBtnIcon = styled.svg`
  width: 18px;
  height: 18px;
`;
